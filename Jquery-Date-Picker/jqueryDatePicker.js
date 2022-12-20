(function ($) {
   // $.extend($.datepicker, {
   //    // Reference the orignal function so we can override it and call it later
   //    _inlineDatepicker2: $.datepicker._inlineDatepicker,

   //    // Override the _inlineDatepicker method
   //    _inlineDatepicker: function (target, inst) {
   //       // Call the original
   //       this._inlineDatepicker2(target, inst);

   //       var beforeShow = $.datepicker._get(inst, "beforeShow");

   //       if (beforeShow) {
   //          beforeShow.apply(target, [target, inst]);
   //       }
   //    },
   // });

   let arr = [2, 3, 4];
   arr.unshift(1);
   console.log(arr);

   const today = new Date();
   const todayElem = document.querySelector(".ui-today");
   todayElem.addEventListener("click", () => {
      $("#datepicker").datepicker("setDate", today);
   });
   let defaultDateFormat = "yy mm dd";
   let selectedDateArr = [];

   $("#datepicker").datepicker({
      // beforeShow: function () {
      //    $(".ui-datepicker-year").text($(".ui-datepicker-year").text() + ".");
      // },
      beforeShowDay: function (date) {
         // dateFrom &&
         // (date.getTime() == dateFrom.getTime() ||
         //    (dateTo && date >= dateFrom && date <= dateTo))
         return [true, getDayStyle(date)];
      },
      onSelect: function (dateText, inst) {
         setSelectedDate(dateText, inst);
      },
      inline: true,
      nextText: "&rsaquo;",
      prevText: "&lsaquo;",
      mode: "range",
      minDate: today,
      // showOtherMonths: true,
      dateFormat: "yy MM dd",
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: [
         "1",
         "2",
         "3",
         "4",
         "5",
         "6",
         "7",
         "8",
         "9",
         "10",
         "11",
         "12",
      ],
      yearSuffix: ".",
      showMonthAfterYear: true,
      // onSelect: (date, selectedDateData)=>{
      //     onSelectEvent(date, selectedDateData)
      // }
      // showOn: "button",
      // buttonImage: "img/calendar-blue.png",
      // buttonImageOnly: true,
   });

   function setSelectedDate(selectedDate, inst) {
      if (!selectedDateArr.includes(selectedDate))
         selectedDateArr.push(selectedDate);
      else {
         selectedDateArr.splice(
            selectedDateArr.findIndex((elm) => elm === selectedDate),
            1
         );
      }
   }

   function getDayStyle(date) {
      if (
         selectedDateArr.find((day) => {
            if (day) {
               let compareDate = new Date(day);
               if (compareDate.getTime() === date.getTime()) return true;
            }
         })
      )
         return "selected-day";
      return "";
   }

   // function getDayStyle(date) {
   //    let dateFrom = $.datepicker.parseDate(
   //       defaultDateFormat,
   //       $("#input1").val()
   //    );
   //    let dateTo = $.datepicker.parseDate(
   //       defaultDateFormat,
   //       $("#input2").val()
   //    );
   //    if (
   //       dateFrom &&
   //       (date.getTime() == dateFrom.getTime() ||
   //          (dateTo && date >= dateFrom && date <= dateTo))
   //    ) {
   //       if (date > dateFrom && date < dateTo) return "selected-day-middle";
   //       return "selected-day";
   //    }
   //    return "";
   // }
})(jQuery);
