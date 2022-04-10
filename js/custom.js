var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "bar",


  // The data for our dataset
  data: {
    // Data Labels
    labels: ["Islamabad", "Rawalpindi", "Karachi", "Lahore","Faisalabad","Gujaranwala","Multan","Murree","Jhelum","Gujarat"],

    datasets: [
      // Data Set 1
      {
        //  Chart Label
        label: "Crime",

        // Actual Data
        data: [10,15,5,9,11,17,13,6,9,9],

        // Background Color
        backgroundColor: [
          "rgba(108, 156, 255, 0.5)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(43, 0, 0, 1)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(43, 70, 255, 0.5)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(108, 255, 255, 0.5)",
          "rgba(43, 156, 0, 1)",
          "rgba(43, 156, 0, 0.5)",
        ],

        // Border Color
       

        // Border Width
        borderWidth: 1,
      },

      
    ],
  },

  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: false,

    // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    // Configure ToolTips
    tooltips: {
      enabled: true, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "red", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },

    // Custom Chart Title
    title: {
      display: true,
      
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,
      lineHeight: 5,
    },

    // Legends Configuration
    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },

    
  },
});