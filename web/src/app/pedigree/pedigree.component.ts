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
    <svg width="640" height="480" #chart></svg>
  `,
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
  i: number = 0; 

  public ngOnInit() {
    console.log('pedigree component on init') 
    this.createChart();
  }

  ngOnChanges() {
    console.log('ngOnChanges')  
  }

  diagonal(d) {
    return "M" + d.source.y + "," + d.source.x
      + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
      + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
      + " " + d.target.y + "," + d.target.x;
  }

  createChart() {
    let chart = this.chartContainer.nativeElement; 

    this.svg = d3.select(chart); 

    this.tree = d3.tree().size([this.height, this.width]); 
    this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.root = d3.hierarchy(data);

    console.log(this.tree, this.root);

    this.update(this.root);
  }

  update(source) {
  
    let nodes = this.tree.nodes(this.root).reverse(),
      links = this.tree.links(nodes);

    nodes.forEach(d => { d.y = d.depth * 180; });

    let node = this.svg.selectAll('g.node')
      .data(nodes, d => d.id || (d.id = ++this.i));

    let nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => 'translate(' + d.y + ',' + d.x + ')');

    nodeEnter.append('circle')
      .attr('r', d => d.value)
      .style('stroke', d => d.type)
      .style('fill', d => d.level);

    nodeEnter.append('text')
      .attr('x', d => d.children || d._children ? (d.value + 4) * -1 : d.value + 4)
      .attr('dy', '.35em')
      .attr('text-anchor', d => d.children || d._children ? 'end' : 'start')
      .text(d => d.name)
      .style('fill-opacity', 1);

    let link = this.svg.selectAll('path.link')
      .data(links, d => d.target.id);

    link.enter().insert('path', 'g')
      .attr('class', 'link')
      .style('stroke', d => d.target.level)
      .attr('d', this.diagonal);
    
  }
}

