//specifyimg the margin, width and height for each plot
var margin = 75,
    width = 750 - margin,
    height = 600 - margin;

//title for the whole document
d3.select("body")
  .append("h1")
  .attr("id","top")
  .text("Titanic Data Visualization Using D3 & Dimple");

//description of 1st plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("1. Overall Survival Rate");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The pie plot below depicts the Overall Survival rate of the incident. Only 38.4% of the passengers survived, rest 61.6% died");

//creating a placeholder for 1st plot
d3.select("body")
  .append("div")
  .attr("class","grp0")
  .append("div")
  .attr("id","plot0");

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


//description of 2nd plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("2. Survival Rate per Class");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts the Survival rate with respect to each class. Class 1 is the highest class and 3 is the lowest Class.");


//creating a placeholder for 2nd plot
d3.select("body")
  .append("div")
  .attr("class","grp1")
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

//description of 3rd plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("3. Survival Rate per Gender");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts the Survival rate with respect to each gender. Plot clearly tells Female passengers had a greater chance of survival.");

//creating a placeholder for 3rd plot
d3.select("body")
  .append("div")
  .attr("class","grp2")
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

//description of 4th plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("4. Survival Rate per Age Group");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts the Survival rate with respect to each Age Group. The ages were divided into 5 groups, few of those whose ages weren't specified are grouped as NA (Not applicable). Children (0-15) have maximum survival rate and passengers with 60+ age had least survival rate.");

//creating a placeholder for 4th plot
d3.select("body")
  .append("div")
  .attr("class","grp3")
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


//description of 5th plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("5. Survival Rate per Family Size");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts the Survival rate with respect to Family Size. Passengers had families of size varying from 0 to 10. Plot tells that those who has families of size 7 or more had no chance of survival.");

//creating a placeholder for 5th plot
d3.select("body")
  .append("div")
  .attr("class","grp4")
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
            x.addOrderRule(['0','1','2','3','4','5','6','7','10']);
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

//description of 6th plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("6. Survival Rate wrt Gender and Class");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts the Survival rate with respect to each Gender and Class. In all the 3 classes, female passengers have higher chances of survival.");

//creating a placeholder for 6th plot
d3.select("body")
  .append("div")
  .attr("class","grp5")
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

//description of 7th plot
d3.select("body")
  .append("br")
d3.select("body")
  .append("h3")
  .attr("class","brief")
  .text("7. Women and Child First Protocol ?");
d3.select("body")
  .append("div")
  .attr("class","brief")
  .text("The bar plot below depicts whether Women and Child First protocol was followed. It is very clear that the protocol was followed. Only 19% of the men had survived the incident.");


//creating a placeholder for 7th plot
d3.select("body")
  .append("div")
  .attr("class","grp6")
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

