import {
  Component,
  OnInit,
  OnChanges,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import data from './data.json'; 

@Component({
  selector: 'pedigree',
  template: `
    <div #chart></div>
  `,
  styleUrls: [
    './pedigree.component.css', 
  ],
  encapsulation: ViewEncapsulation.None
})
export class PedigreeComponent implements OnInit, OnChanges {
  @ViewChild('chart') chartContainer: any;
  svg: any;
  tree: any;
  root: any;
  margin: any = { top: 20, right: 20, bottom: 20, left: 20 };
  width: number = 960 - this.margin.right - this.margin.left;
  height: number = 900 - this.margin.top - this.margin.bottom;
  duration: number = 750;
  i: number = 0; 

  public ngOnInit() {
    console.log('pedigree component on init') 
    this.createChart();
  }

  ngOnChanges() {
    console.log('ngOnChanges')  
  }

  createChart() {
    let chart = this.chartContainer.nativeElement; 
    let transform = d3.zoomIdentity;
    this.svg = d3.select(chart).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    let g = this.svg.append('g');

    let color = d3.scaleOrdinal(d3.schemeCategory20);
    let graph = data;
    let nodes = graph.nodes,
      nodeById = d3.map(nodes, d => { return d.id; }),
      links = graph.links,
      bilinks = [];

    let zoom = d3.zoom()
      .scaleExtent([0.1, 8])
      .on('zoom', zoomed);

    this.svg.call(zoom);

    let minDate = d3.min(nodes, d => new Date(d.born));
    let maxDate = new Date();
    let y = d3.scaleTime()
      .domain([minDate, maxDate])
      .range([this.margin.top, this.height]);

    let yAxis = d3.axisLeft(y)
      .ticks(50)
      .tickFormat(d3.timeFormat("%Y"));

    let gY = this.svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(50, 0)');
    
    gY.call(yAxis);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(80).strength(0.8))
      .force("charge", d3.forceManyBody(80).strength([-1400]))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    links.forEach(function(link) {
      let s = link.source = nodeById.get(link.source),
        t = link.target = nodeById.get(link.target),
        i = {}; // intermediate node
      nodes.push(i);
      links.push({source: s, target: i}, {source: i, target: t});
      bilinks.push([s, i, t]);
    });

    let link = g.selectAll(".link")
      .data(bilinks)
      .enter().append("path")
      .attr("class", 'link');

    let node = g.selectAll(".node")
      .data(nodes.filter(d => { return d.id; }))
      .enter().append('g')
        .attr("class", "node")
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
        );

    node.append("circle")
        .attr("r", 10)
        .attr("fill", d => { return color(d.group); })
        
    node.append("text")
      .attr('dx', 12)
      .text(d => { return d.lastName + ' ' +  d.firstName; });

    simulation
      .nodes(nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(links);

    function ticked() {
      link.attr("d", positionLink);
      node.attr("transform", positionNode);
    }

    function positionLink(d) {
        return "M" + d[0].x + "," + y(new Date(d[0].born))
      //+ "C" + (d[0].x + d[2].x) / 2 + "," + y(new Date(d[0].born))
      //   + " " + (d[0].x + d[2].x) / 2 + "," + y(new Date(d[2].born))
          + " " + d[2].x + "," + y(new Date(d[2].born));
    }

    function positionNode(d) {
        return "translate(" + d.x + "," + y(new Date(d.born)) + ")";
    }

    function zoomed() {
      let new_yScale = d3.event.transform.rescaleY(y)
      
      gY.call(yAxis.scale(new_yScale));
      g.attr('transform', d3.event.transform))
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x, d.fy = d.y;
      d3.select(this).classed('fixed', d.fixed = true);  
    }

    function dragged(d) {
      d.fx = d3.event.x, d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null, d.fy = null;
    }
  }

}

