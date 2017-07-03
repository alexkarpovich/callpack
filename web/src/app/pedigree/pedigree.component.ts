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
    <svg width="960" height="500" #chart></svg>
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
  margin: any = { top: 20, right: 120, bottom: 20, left: 120 };
  width: number = 960 - this.margin.right - this.margin.left;
  height: number = 500 - this.margin.top - this.margin.bottom;
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
    this.svg = d3.select(chart); 
    let color = d3.scaleOrdinal(d3.schemeCategory20);
    let graph = data;
    let nodes = graph.nodes,
      nodeById = d3.map(nodes, d => { return d.id; }),
      links = graph.links,
      bilinks = [];

    let minDate = d3.min(nodes, d => new Date(d.born));
    let maxDate = new Date();
    let y = d3.scaleTime()
      .domain([minDate, maxDate])
      .range([this.margin.top, this.height]);

    let yAxis = d3.axisLeft(y)
      .ticks(d3.timeYear, 5)
      .tickFormat(d3.timeFormat("%Y"));

    this.svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(50, 0)')
      .call(yAxis);

    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(80).strength(0.1))
      .force("charge", d3.forceManyBody().strength([-30]))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));

    links.forEach(function(link) {
      let s = link.source = nodeById.get(link.source),
        t = link.target = nodeById.get(link.target),
        i = {}; // intermediate node
      nodes.push(i);
      links.push({source: s, target: i}, {source: i, target: t});
      bilinks.push([s, i, t]);
    });

    let link = this.svg.selectAll(".link")
      .data(bilinks)
      .enter().append("path")
        .attr("class", "link");

    let node = this.svg.selectAll(".node")
      .data(nodes.filter(d => { return d.id; }))
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .attr("fill", d => { return color(d.group); })
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

    node.append("title")
      .text(d => { return d.id; });

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
          + "C" + (d[0].x + d[2].x) / 2 + "," + y(new Date(d[0].born))
          + " " + (d[0].x + d[2].x) / 2 + "," + y(new Date(d[2].born))
          + " " + d[2].x + "," + y(new Date(d[2].born));
    }

    function positionNode(d) {
        return "translate(" + d.x + "," + y(new Date(d.born)) + ")";
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x, d.fy = d.y;
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

