//specifyimg the margin, width and height for each plot
var margin = 75,
    width = 750 - margin,
    height = 600 - margin;

//title for the whole document
d3.select("body")
  .append("h1")
  .attr("id","top")
  .text("Titanic Data Visualization Using D3 & Dimple");
  

//creating a placeholder for 1st plot
d3.select("body")
  .append("div")
  .attr("class","0")
  .append("div")
  .attr("id","plot0")

//adding an svg to 1st plot
var svg0 = dimple.newSvg("#plot0", width, height);

//plotting the pie plot
d3.csv("data/survival.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg0, data);
            myChart.setBounds(100, 100, 500, 330);
            myChart.addMeasureAxis("p", "Percentage");
            myChart.addSeries("State", dimple.plot.pie);
        
            svg0.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Survival Rate");
            myChart.addLegend(65, 60, 550, 20, "right");
            myChart.draw();
        });



//creating a placeholder for 2nd plot
d3.select("body")
  .append("div")
  .attr("class","1")
  .append("div")
  .attr("id","plot1");

//adding an svg to 2nd plot
var svg1 = dimple.newSvg("#plot1", width, height);
  
//plotting the bar plot
d3.csv("data/survival_wrt_class.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg1, data);
            myChart.addCategoryAxis("x", "Pclass");
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries(null,dimple.plot.bar);
            //myChart.addSeries(["Survival Count","Death Count"],dimple.plot.bar);

            svg1.append("text")
               .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
               .attr("y", myChart._yPixels() - 20)
               .style("text-anchor", "middle")
               .style("font-family", "sans-serif")
               .style("font-weight", "bold")
               .text("Survival Rate Per Class");
            myChart.draw();
        });

//creating a placeholder for 3rd plot
d3.select("body")
  .append("div")
  .attr("class","2")
  .append("div")
  .attr("id","plot2");

//adding an svg to 3rd plot
var svg2 = dimple.newSvg("#plot2", width, height);

//plotting the bar plot
d3.csv("data/survival_wrt_sex.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg2, data);
            myChart.addCategoryAxis("x", "Sex");
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries(null,dimple.plot.bar);
            //myChart.addSeries(["Survival Count","Death Count"],dimple.plot.bar);
            svg2.append("text")
               .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
               .attr("y", myChart._yPixels() - 20)
               .style("text-anchor", "middle")
               .style("font-family", "sans-serif")
               .style("font-weight", "bold")
               .text("Survival Rate Per Gender");
            myChart.draw();
        });


//creating a placeholder for 4th plot
d3.select("body")
  .append("div")
  .attr("class","3")
  .append("div")
  .attr("id","plot3");

//adding an svg to 4th plot
var svg3 = dimple.newSvg("#plot3", width, height);

//plotting the bar plot
d3.csv("data/survival_wrt_age.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg3, data);

            x=myChart.addCategoryAxis("x", "Age_Group");
            x.addOrderRule(["0-15", "16-30", "31-45", "46-60", "60+","NA"]);
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries(null,dimple.plot.bar);
            //myChart.addSeries(["Survival Count","Death Count"],dimple.plot.bar);

            svg3.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Survival Rate Per Age Group");

            myChart.draw();
        });



//creating a placeholder for 5th plot
d3.select("body")
  .append("div")
  .attr("class","4")
  .append("div")
  .attr("id","plot4")

//adding an svg to 5th plot
var svg4 = dimple.newSvg("#plot4", width, height);

//plotting the line & scatter plot
d3.csv("data/survival_wrt_family_size.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg4, data);

            x=myChart.addCategoryAxis("x", "Family");
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries(null,dimple.plot.line);
            myChart.addSeries(null,dimple.plot.scatter);
            //myChart.addSeries(["Survival Count","Death Count"],dimple.plot.scatter);
        
            svg4.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Survival Rate wrt Family Size");
            myChart.draw();
        });


//creating a placeholder for 6th plot
d3.select("body")
  .append("div")
  .attr("class","5")
  .append("div")
  .attr("id","plot5")

//adding an svg to 6th plot
var svg5 = dimple.newSvg("#plot5", width, height);

//plotting the bar plot
d3.csv("data/survival_wrt_sex_class.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg5, data);

            x=myChart.addCategoryAxis("x", ["Pclass","Sex"]);
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries("Sex",dimple.plot.bar);
        
            svg5.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Survival Rate wrt Class and Gender");
            myChart.addLegend(65, 60, 550, 20, "right");
            myChart.draw();
        });


//creating a placeholder for 7th plot
d3.select("body")
  .append("div")
  .attr("class","6")
  .append("div")
  .attr("id","plot6")

//adding an svg to 7th plot
var svg6 = dimple.newSvg("#plot6", width, height);

//plotting the bar plot
d3.csv("data/survival_female_child.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg6, data);

            var x = myChart.addCategoryAxis("x", "Women_Child_OR_Male");
            myChart.addMeasureAxis("y", "Percentage");
            myChart.addSeries(null, dimple.plot.bar);
            //myChart.addSeries(["Survival Count","Death Count"], dimple.plot.bar);
        
            svg6.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Woman and Child first Protocol ?");
            myChart.draw();
        });

