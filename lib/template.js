module.exports = {
    HTML:function (title, list, body, control) {
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <!-- <link rel="stylesheet" href="style.css"> -->
        <style>
          body{
            margin:0;
          } 
          a {
            color:black;
            text-decoration: none;
          }
          h1{
            font: size 45px;
            text-align: center;
            border-bottom: 1px solid gray;
            margin: 0;
            padding:20px;
          }
          #grid{
            display: grid;
            grid-template-columns: 150px 1fr;
          }
          ul{
            border-right:1px solid gray;
            width:100px;
            margin:0;
            padding: 20px;
          }
          @media(max-width:800px){
            #grid{
                display: block;
        
            }
            ul{
                border-right: none;
            }
            h1{
                border-bottom: none;
            }
          }
      </style>
      
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <div id="grid">
          ${list}
          <div>
            ${control}
            ${body}
          </div>
        </div>
      </body>
      </html>
      `;
    },list:function (filelist) {
      var list = '<ul>';
      var i = 0;
      while (i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
      }
      list = list + `</ul>`;
      return list;
    }
  }

  