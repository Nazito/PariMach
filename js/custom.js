$(window).load(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  $("body").removeClass("loaded");
});

var handler = function () {
  $(".web .project__btn").mouseenter(function () {
    $(".left-man-bg").css({
      transform: "translateX(+10%)",
      transition: ".4s",
    });
    $(".right-man-bg").css({
      transform: "translateX(-10%)",
      transition: ".4s",
    });
    $(".city-bg").css({
      transform: "scale(1.03)",
      transition: ".4s",
    });
  });

  $(".web .project__btn").mouseleave(function () {
    $(".left-man-bg").css({
      transform: "translateX(0%)",
      transition: ".4s",
    });
    $(".city-bg").css({
      transform: "scale(1)",
      transition: ".4s",
    });
    $(".right-man-bg").css({
      transform: "translateX(0%)",
      transition: ".4s",
    });
  });

  var car = document.getElementById("car");

  var keyframe = [
    { transform: "translate(0)" },
    { transform: "translate3d(250vw, 90vh,-2000px )" },
    { transform: "translate(250vw,150vh )" },
    { transform: "translate(-250vw,150vh )" },
    { transform: "translate(-250vw,-30vh )" },
    { transform: "translate(0)" },
  ];

  var timings = {
    duration: 1000,
    easing: "linear",
    iterations: Infinity,
  };

  var objCar = car.animate(keyframe, timings);
  objCar.playbackRate = 0;

  $(".web .project__btn").mouseenter(function () {
    setTimeout(function () {}, 500);
    objCar.playbackRate = 0.5;
  });

  $(".web .project__btn").mouseleave(function () {
    objCar.playbackRate -= 50;
  });
};
$(window).bind("load", handler);
$(window).bind("resize", handler);
