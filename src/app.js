const grid = $("#grid").data("kendoGrid");

const kitties = [
  {
    name: "Charmmykitty",
    age: "08",
    flower: "https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/500x500/ifa_upload/pink_chiffon_hibiscus_0.jpg"
  },
  {
    name: "Embercat",
    age: "02",
    flower: "https://i5.walmartimages.com/asr/555507a6-387b-4972-8207-deaf97fab275_1.11842a3a5487661dea68be2b7f680770.png"
  },
  {
    name: "Kittay",
    age: "14",
    flower: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/green-flowers-green-gerber-daisy-1586803096.jpg"
  }
]

$(function(){
  $("#grid").kendoGrid({

      columns: [
        {
          field: "name",
          title: "Kitty Name",
          template: "<button id='#= name #'><img src='#= flower #' />#= name #</div>",
          headerAttributes: { style: "font-size: 24px" }
        },
        {
          field: "age",
          title: "Kitty Age",
          template: "<div id='age'>#= age #</div>",
          headerAttributes: { style: "font-size: 24px" }
        }
      ],

      dataSource: {
        data: kitties
        // pageSize: 1
      },

      width: 500,
      scrollable: false,
      // pageable: true,
      // groupable: true,
      // selectable: true,
      sortable: true

  });
})

const deleteRow = () => {
  grid.removeRow("tr:eq(1)");
}

$(function() {
  if ($.cookie("deletedKitty") === "Charmmykitty") {
    deleteRow();
  };
});

$(function() {
  const buttonCharmmy = $("#Charmmykitty");
  const buttonEmber = $("#Embercat");
  const buttonKittay = $("#Kittay");

  buttonCharmmy.on("click", function(e) {
    // console.log('deleted:', 'Charmmykitty');
    grid.removeRow("tr:eq(1)");
    $.cookie("deletedCharmmy", true);

    console.log($.cookie("deletedCharmmy"));
  });

  buttonEmber.on("click", function(e) {
    // console.log('deleted:', 'Embercat');
    grid.removeRow("tr:eq(2)");
    $.cookie("deletedEmber", true);

    console.log($.cookie("deletedEmber"));
  });

  buttonKittay.on("click", function(e) {
    // console.log('deleted:', 'Kittay');
    grid.removeRow("tr:eq(3)");
    $.cookie("deletedKittay", true);

    console.log($.cookie("deletedKittay"));
  });
});

$(function() {
  const undoBtn = $("#undoBtn");

  undoBtn.on("click", function(e) {
    console.log("undo clicked");

    grid.removeRow("tr:eq(1)");
    $.cookie("deletedCharmmy", null);
    $.cookie("deletedEmber", null);
    $.cookie("deletedKittay", null);

    console.log(getCookie("deletedCharmmy"));
  });
});