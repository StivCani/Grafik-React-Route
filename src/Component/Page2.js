import React, { useState, useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";


function Page2() {


  const { id } = useParams()


  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then((result) => {



        const res = result.data
        let root = am5.Root.new("chartdiv");  //1
        root.setThemes([
          am5themes_Animated.new(root)
        ]);


        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout
          })
        );
          const done = res.filter(todo => ( todo.completed)).length
        // Define data
        var data = [{
          lable: "Done",
          value: done,
        }, {
          lable: "To Do",
          value: res.length - done,
        }];
        // Create series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            name: "Series",
            valueField: "value",
            categoryField: "lable"
          })
        );
        series.data.setAll(data);


      })
  }, []);



  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );

}

export default Page2
