/*
שומר את כול ההגדרות כדי שלא נצתרך לרשום אותם ידנית
*/


const HtmlWebpackPlugin = require("html-webpack-plugin");//מיבא את הפלאג אין
const path = require('path');//עוזר בניתוב

module.exports = {//שומר על כול ההגדרות
  entry:"./src/index.js",//הגדרת נקודת מוצא לקבצי גאווה סקריפט
  output:
  {
      filename:"main.js",
      path:path.resolve(__dirname,"dist")
  },
  module:{
      rules:
      [
          {
              //אומר לוובפאק שכול פעם שהוא מוצא קובץ של גאווה סקריפט הוא צריך לצרף אותו לבנדל
              test:/\.js$/,
              //אומר לוובפאק שלא צריך לצרף את התקיה של הנוד
              exclude:/(nod_modules)/,
              //באיזה לודר להשתמש
              //נותן את האפשרות לעבוד עם אקמה 6 וריאקט
              //npm i @babel/preset-env @babel/preset-react
              use:
              {
                  loader:'babel-loader',
                  Option:
                  {
                      presets:['@babel/preset-env']
                  }
                  
              }
            }
        ]
  }
//     plugins: [
//     new HtmlWebpackPlugin({
//       title: "Webpack Output",
//     }),
//   ],
};