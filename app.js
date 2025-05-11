const logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjM2MHB4Ig0KCSBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAzNjAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MCA4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe29wYWNpdHk6MDtmaWxsOiM0RDRENEQ7fQ0KCS5zdDF7Y2xpcC1wYXRoOnVybCgjWE1MSURfNDFfKTtmaWxsOiMwMEEwREI7fQ0KCS5zdDJ7b3BhY2l0eTowO30NCgkuc3Qze2ZpbGw6I0Q5RTAyMTt9DQoJLnN0NHtmaWxsOiMwMEEwREI7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xIj4NCgk8ZyBpZD0iWE1MSURfNjMwXyI+DQoJCTxyZWN0IGlkPSJYTUxJRF82NDFfIiBjbGFzcz0ic3QwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz4NCgkJPGcgaWQ9IlhNTElEXzYzNl8iPg0KCQkJPGRlZnM+DQoJCQkJPHBhdGggaWQ9IlhNTElEXzYzN18iIGQ9Ik0zOS44LDI2LjhjLTAuNS0xLjItMS40LTItMi43LTIuNkwzMS40LDIyYy00LjcsMi4yLTcuOSw1LjctOS44LDEwLjZjLTAuNCwxLTAuNywyLTEsMy4xDQoJCQkJCWMxLjEsMCwyLjEsMC4yLDMuMiwwLjdsNy4zLDNjMS4zLDAuNSwyLjUsMC41LDMuNywwYzEuMi0wLjUsMi0xLjMsMi41LTIuNmwyLjUtNi4zQzQwLjQsMjkuMyw0MC4zLDI4LDM5LjgsMjYuOCBNMzIuMSw1Ni4zDQoJCQkJCWw5LjQsMy43YzYuMy0wLjUsMTEuMi0zLjMsMTQuOS04LjRjLTAuMS0wLjUtMC4yLTEtMC40LTEuNmMtMC42LTEuMi0xLjUtMi4xLTIuOC0yLjZsLTYuOS0yLjhjLTAuMiwwLjEtMC40LDAuMS0wLjUsMC4yDQoJCQkJCWMtMC4yLDAuMS0wLjQsMC4xLTAuNywwLjFjLTEuNCwwLTIuNS0xLjEtMi41LTIuNWMwLTEuNCwxLjEtMi41LDIuNS0yLjVjMS4yLDAsMi4xLDAuOCwyLjQsMS45bDYuOCwyLjhjMS4yLDAuNSwyLjUsMC41LDMuOCwwDQoJCQkJCWMwLjYtMC4zLDEuMS0wLjYsMS41LTFjMS01LjYtMC4yLTEwLjYtMy41LTE1LjJMNDUsMjMuOGwxLTIuNGwwLjItMC41Yy0zLjMtMS02LjktMS4yLTEwLjMtMC40bDIuNCwxYzIuMSwwLjcsMy42LDIuMiw0LjUsNC4yDQoJCQkJCWMwLjksMiwxLDQsMC4yLDZMNDAuNCwzOGMtMC44LDItMi4zLDMuNC00LjMsNC4yYy0yLDAuOC00LjEsMC44LTYuMSwwbC03LjMtM2MtMy0xLTIuOCwwLjItMi41LDIuNmMwLjMsMi45LDEuMSw1LjYsMi42LDguMg0KCQkJCQljMiwzLjUsNS4xLDYuNCw4LjcsOC4xIi8+DQoJCQk8L2RlZnM+DQoJCQk8dXNlIHhsaW5rOmhyZWY9IiNYTUxJRF82MzdfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDojMDBBMERCOyIvPg0KCQkJPGNsaXBQYXRoIGlkPSJYTUxJRF80MV8iPg0KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1hNTElEXzYzN18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCTwvY2xpcFBhdGg+DQoJCQk8cmVjdCBpZD0iWE1MSURfNjQwXyIgeD0iMTkuNiIgeT0iMTkuNyIgY2xhc3M9InN0MSIgd2lkdGg9IjQxIiBoZWlnaHQ9IjQxLjgiLz4NCgkJPC9nPg0KCQk8ZyBpZD0iWE1MSURfNjMxXyIgY2xhc3M9InN0MiI+DQoJCQk8cmVjdCBpZD0iWE1MSURfNjM1XyIgY2xhc3M9InN0MyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+DQoJCQk8cmVjdCBpZD0iWE1MSURfNjM0XyIgeD0iNjAiIGNsYXNzPSJzdDMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPg0KCQkJPHJlY3QgaWQ9IlhNTElEXzYzM18iIHk9IjYwIiBjbGFzcz0ic3QzIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiLz4NCgkJCTxyZWN0IGlkPSJYTUxJRF82MzJfIiB4PSI2MCIgeT0iNjAiIGNsYXNzPSJzdDMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF84MF8iPg0KCQk8cmVjdCBpZD0iWE1MSURfNTYwXyIgeD0iNjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iODAiLz4NCgkJPGcgaWQ9IlhNTElEXzg2XyI+DQoJCQk8ZyBpZD0iWE1MSURfMjMzXyI+DQoJCQkJPHBhdGggaWQ9IlhNTElEXzIzNF8iIGNsYXNzPSJzdDQiIGQ9Ik0zMjIuOSw1MS44aC0xNS4ydi0yLjlsMi43LTIuOWM0LjYtNC43LDcuMy03LjgsNy4zLTExYzAtMi4xLTEuMS0zLjgtMy44LTMuOA0KCQkJCQljLTEuOCwwLTMuNCwwLjktNC41LDEuN2wtMS4zLTMuNGMxLjUtMS4xLDQtMi4yLDYuOC0yLjJjNS4yLDAsNy42LDMuMyw3LjYsNy4yYzAsNC4yLTIuOSw3LjctNi41LDExLjJsLTIsMnYwLjFoOC45VjUxLjh6Ii8+DQoJCQk8L2c+DQoJCQk8ZyBpZD0iWE1MSURfMjMwXyI+DQoJCQkJPHBhdGggaWQ9IlhNTElEXzIzMV8iIGNsYXNzPSJzdDQiIGQ9Ik0zMzUuMSwzOC45YzIuNywwLjYsNC45LDIuOCw0LjksNmMwLDQtMy4yLDcuMi04LjksNy4yYy0yLjYsMC00LjktMC43LTYuMS0xLjVsMS4xLTMuNQ0KCQkJCQljMC45LDAuNiwyLjksMS4zLDQuNywxLjNjMi45LDAsNC40LTEuOCw0LjQtMy43YzAtMi43LTIuNC00LTUtNGgtMS42di0zLjNoMS41YzEuOSwwLDQuMy0xLDQuMy0zLjRjMC0xLjctMS4xLTIuOS0zLjQtMi45DQoJCQkJCWMtMS43LDAtMy4zLDAuNy00LjIsMS4zbC0xLTMuNGMxLjMtMC44LDMuNy0xLjYsNi4zLTEuNmM0LjcsMCw3LjEsMi43LDcuMSw1LjlDMzM5LjIsMzUuOCwzMzcuNywzNy45LDMzNS4xLDM4LjlMMzM1LjEsMzguOXoiDQoJCQkJCS8+DQoJCQk8L2c+DQoJCQk8ZyBpZD0iWE1MSURfODdfIj4NCgkJCQk8cGF0aCBpZD0iWE1MSURfMjI2XyIgY2xhc3M9InN0NCIgZD0iTTgwLDMwLjljMS4zLTAuMywzLjktMC40LDYuNC0wLjRjMywwLDQuOSwwLjMsNi41LDEuMmMxLjUsMC44LDIuNiwyLjMsMi42LDQuMg0KCQkJCQljMCwxLjktMS4xLDMuNy0zLjYsNC42djAuMWMyLjUsMC43LDQuNCwyLjUsNC40LDUuM2MwLDItMC45LDMuNS0yLjMsNC42Yy0xLjYsMS4yLTQuMywyLTguNiwyYy0yLjQsMC00LjMtMC4yLTUuNC0wLjNWMzAuOXoNCgkJCQkJIE04NC45LDM5LjFoMS42YzIuNiwwLDQtMS4xLDQtMi43YzAtMS42LTEuMy0yLjUtMy41LTIuNWMtMS4xLDAtMS43LDAuMS0yLjEsMC4xVjM5LjF6IE04NC45LDQ4LjdjMC41LDAuMSwxLjEsMC4xLDEuOSwwLjENCgkJCQkJYzIuMiwwLDQuMi0wLjgsNC4yLTMuMWMwLTIuMi0yLTMtNC41LTNoLTEuN1Y0OC43eiIvPg0KCQkJCTxwYXRoIGlkPSJYTUxJRF8yMjNfIiBjbGFzcz0ic3Q0IiBkPSJNOTkuNiwzMC45YzEuNi0wLjMsNC0wLjQsNi42LTAuNGMzLjIsMCw1LjUsMC41LDcuMSwxLjdjMS4zLDEsMiwyLjUsMiw0LjUNCgkJCQkJYzAsMi44LTIsNC42LTMuOSw1LjNWNDJjMS41LDAuNiwyLjQsMiwyLjksNGMwLjcsMi40LDEuNCw1LjMsMS44LDYuMWgtNS4xYy0wLjQtMC42LTAuOS0yLjQtMS41LTVjLTAuNi0yLjctMS41LTMuNC0zLjUtMy41DQoJCQkJCWgtMS41djguNWgtNC45VjMwLjl6IE0xMDQuNSw0MC4xaDEuOWMyLjUsMCwzLjktMS4yLDMuOS0zLjFjMC0yLTEuNC0zLTMuNi0zYy0xLjIsMC0xLjksMC4xLTIuMiwwLjJWNDAuMXoiLz4NCgkJCQk8cGF0aCBpZD0iWE1MSURfMjIwXyIgY2xhc3M9InN0NCIgZD0iTTEyNC4zLDQ2LjZsLTEuNiw1LjVoLTUuMWw2LjctMjEuNmg2LjVsNi44LDIxLjZoLTUuM2wtMS43LTUuNUgxMjQuM3ogTTEyOS45LDQzbC0xLjQtNC42DQoJCQkJCWMtMC40LTEuMy0wLjgtMi45LTEuMS00LjJoLTAuMWMtMC4zLDEuMy0wLjYsMi45LTEsNC4yTDEyNSw0M0gxMjkuOXoiLz4NCgkJCQk8cGF0aCBpZD0iWE1MSURfMjE4XyIgY2xhc3M9InN0NCIgZD0iTTE0NS41LDMwLjZ2MjEuNmgtNVYzMC42SDE0NS41eiIvPg0KCQkJCTxwYXRoIGlkPSJYTUxJRF8yMTZfIiBjbGFzcz0ic3Q0IiBkPSJNMTQ5LjgsNTIuMVYzMC42aDUuOGw0LjUsNy45YzEuMywyLjMsMi42LDUsMy42LDcuNGgwLjFjLTAuMy0yLjktMC40LTUuOC0wLjQtOXYtNi4zaDQuNQ0KCQkJCQl2MjEuNmgtNS4ybC00LjctOC4zYy0xLjMtMi4zLTIuNy01LjEtMy44LTcuNmwtMC4xLDBjMC4xLDIuOCwwLjIsNS45LDAuMiw5LjR2Ni41SDE0OS44eiIvPg0KCQkJCTxwYXRoIGlkPSJYTUxJRF8yMTRfIiBjbGFzcz0ic3Q0IiBkPSJNMTc4LjksNDcuMWMxLjMsMC43LDMuNCwxLjMsNS41LDEuM2MyLjMsMCwzLjUtMC45LDMuNS0yLjNjMC0xLjMtMS0yLjEtMy43LTMNCgkJCQkJYy0zLjYtMS4yLTYtMy4yLTYtNi40YzAtMy43LDMuMS02LjUsOC4zLTYuNWMyLjUsMCw0LjMsMC41LDUuNiwxLjFsLTEuMSwzLjljLTAuOS0wLjQtMi40LTEtNC42LTFjLTIuMSwwLTMuMiwxLTMuMiwyLjENCgkJCQkJYzAsMS40LDEuMiwyLDQuMSwzYzMuOSwxLjQsNS43LDMuNCw1LjcsNi40YzAsMy42LTIuOCw2LjctOC44LDYuN2MtMi41LDAtNS0wLjYtNi4yLTEuM0wxNzguOSw0Ny4xeiIvPg0KCQkJCTxwYXRoIGlkPSJYTUxJRF8yMTJfIiBjbGFzcz0ic3Q0IiBkPSJNMjAwLjUsMzQuN2gtNS45di00LjFoMTYuOHY0LjFoLTZ2MTcuNWgtNVYzNC43eiIvPg0KCQkJCTxwYXRoIGlkPSJYTUxJRF8yMDlfIiBjbGFzcz0ic3Q0IiBkPSJNMjE2LjksNDYuNmwtMS42LDUuNWgtNS4xbDYuNy0yMS42aDYuNWw2LjgsMjEuNmgtNS4zbC0xLjctNS41SDIxNi45eiBNMjIyLjQsNDNsLTEuNC00LjYNCgkJCQkJYy0wLjQtMS4zLTAuOC0yLjktMS4xLTQuMmgtMC4xYy0wLjMsMS4zLTAuNywyLjktMSw0LjJsLTEuMyw0LjZIMjIyLjR6Ii8+DQoJCQkJPHBhdGggaWQ9IlhNTElEXzIwNV8iIGNsYXNzPSJzdDQiIGQ9Ik0yMzQuNiwzNC43aC01Ljl2LTQuMWgxNi44djQuMWgtNnYxNy41aC01VjM0Ljd6Ii8+DQoJCQkJPHBhdGggaWQ9IlhNTElEXzIwMV8iIGNsYXNzPSJzdDQiIGQ9Ik0yNTMuMiwzMC42djIxLjZoLTVWMzAuNkgyNTMuMnoiLz4NCgkJCQk8cGF0aCBpZD0iWE1MSURfOTBfIiBjbGFzcz0ic3Q0IiBkPSJNMjc3LjUsNDEuMWMwLDcuMS00LjQsMTEuNC0xMC44LDExLjRjLTYuNSwwLTEwLjMtNC44LTEwLjMtMTFjMC02LjUsNC4yLTExLjMsMTAuNy0xMS4zDQoJCQkJCUMyNzMuOSwzMC4yLDI3Ny41LDM1LjIsMjc3LjUsNDEuMXogTTI2MS43LDQxLjRjMCw0LjIsMiw3LjIsNS4zLDcuMmMzLjMsMCw1LjMtMy4xLDUuMy03LjNjMC0zLjktMS45LTcuMi01LjMtNy4yDQoJCQkJCUMyNjMuNywzNC4xLDI2MS43LDM3LjIsMjYxLjcsNDEuNHoiLz4NCgkJCQk8cGF0aCBpZD0iWE1MSURfODhfIiBjbGFzcz0ic3Q0IiBkPSJNMjgwLjgsNTIuMVYzMC42aDUuOGw0LjUsNy45YzEuMywyLjMsMi42LDUsMy42LDcuNGgwLjFjLTAuMy0yLjktMC40LTUuOC0wLjQtOXYtNi4zaDQuNQ0KCQkJCQl2MjEuNmgtNS4ybC00LjctOC4zYy0xLjMtMi4zLTIuNy01LjEtMy44LTcuNmwtMC4xLDBjMC4xLDIuOCwwLjIsNS45LDAuMiw5LjR2Ni41SDI4MC44eiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxnIGlkPSJYTUxJRF84MV8iIGNsYXNzPSJzdDIiPg0KCQkJPHJlY3QgaWQ9IlhNTElEXzg1XyIgeD0iNjAiIHk9IjcuNSIgY2xhc3M9InN0MyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+DQoJCQk8cmVjdCBpZD0iWE1MSURfODRfIiB4PSIzNDAiIHk9IjcuNSIgY2xhc3M9InN0MyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+DQoJCQk8cmVjdCBpZD0iWE1MSURfODNfIiB4PSI2MCIgeT0iNTIuNSIgY2xhc3M9InN0MyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+DQoJCQk8cmVjdCBpZD0iWE1MSURfODJfIiB4PSIzNDAiIHk9IjUyLjUiIGNsYXNzPSJzdDMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo=";

const customTheme = {
  "common.bi.image": logo,
  "common.bisize.height": "auto",
  "common.backgroundColor": "#2c3e50",
  "menu.normalIcon.color": "cyan",
  "menu.activeIcon.color": "#3498db",
  "menu.disabledIcon.color": "#7f8c8d",
  "menu.hoverIcon.color": "#ecf0f1",
  "submenu.backgroundColor": "#2c3e50",
  "submenu.partition.color": "#ecf0f1",
  "submenu.normalLabel.color": "#ecf0f1",
  "submenu.activeLabel.color": "#3498db",
};

const editor = new tui.ImageEditor(
  document.querySelector("#tui-image-editor-container"),
  {
    includeUI: {
      loadImage: {
        path: "../images/demo.jpeg",
        name: "DefaultImage",
      },
      theme: customTheme,
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "mask",
        "filter",
      ],
      menuBarPosition: "left",
      uiSize: {
        width: "80vw",
        height: "75vh",
      }
    },
    cssMaxWidth: 1000,
    cssMaxHeight: 1000,
    usageStatistics: false,
  }
);

// Handle window resize
window.onresize = function () {
  editor.ui.resizeEditor();
};

// Handle file input
document.getElementById("imageInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      editor.loadImageFromURL(e.target.result, file.name).then(() => {
        console.log("Image loaded successfully");
      });
    };
    reader.readAsDataURL(file);
  }
});

// Handle crop button
document.getElementById("cropButton").addEventListener("click", () => {
  editor.crop({ left: 100, top: 100, width: 300, height: 200 }).then(() => {
    console.log("Image cropped to 300x200");
  });
});

// Handle rotate button
document.getElementById("rotateButton").addEventListener("click", () => {
  editor.rotate(90).then(() => {
    console.log("Image rotated 90°");
  });
});

// Handle flip button
document.getElementById("flipButton").addEventListener("click", () => {
  editor.flipX().then(() => {
    console.log("Image flipped horizontally");
  });
});

// Handle text button
document.getElementById("textButton").addEventListener("click", () => {
  editor
    .addText("Toast UI", {
      styles: {
        fill: "#ff0000",
        fontSize: 50,
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      position: { x: 0, y: 0 },
    })
    .then(() => {
      console.log("Text added");
    });
});

// Handle filter button
document.getElementById("filterButton").addEventListener("click", () => {
  editor.applyFilter("grayscale").then(() => {
    console.log("Grayscale filter applied");
  });
});

// Handle image selection
document.querySelectorAll(".image-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Remove selected class from all items
    document.querySelectorAll(".image-item").forEach((i) => {
      i.classList.remove("selected");
    });
    // Add selected class to clicked item
    item.classList.add("selected");
    // Load selected image
    const imagePath = item.getAttribute("data-image");
    editor.loadImageFromURL(imagePath, `Image${imagePath.split('/').pop()}`).then(() => {
      console.log("Selected image loaded");
    });
  });
});

// Handle download button
document.getElementById("downloadButton").addEventListener("click", () => {
  Swal.fire({
    title: "Download Image",
    html: `
      <input type="text" id="fileName" class="swal2-input" placeholder="Enter file name" value="edited-image">
      <select id="fileType" class="swal2-select">
        <option value="png">PNG</option>
        <option value="jpeg">JPEG</option>
      </select>
    `,
    showCancelButton: true,
    confirmButtonText: "Download",
    preConfirm: () => {
      const fileName = document.getElementById("fileName").value || "edited-image";
      const fileType = document.getElementById("fileType").value;
      return { fileName, fileType };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { fileName, fileType } = result.value;
      const fullFileName = `${fileName}.${fileType}`;
      const dataUrl = editor.toDataURL({ format: fileType });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = fullFileName;
      link.click();
      uploadToServer(dataUrl, fullFileName);
    }
  });
});

// Handle server upload (example)
async function uploadToServer(dataUrl, fileName) {
  try {
    console.log("Request body:", JSON.stringify({ image: dataUrl, fileName }));
    
    // Simulate a successful server response
    const result = { success: true, url: "https://example.com/your-uploaded-image.png" };
    
    if (result.success) {
      Swal.fire("Success", `Image uploaded! Access it at: ${result.url}`, "success");
    } else {
      Swal.fire("Error", "Failed to upload image", "error");
    }
  } catch (error) {
    Swal.fire("Error", "Server error occurred", "error");
  }
}
