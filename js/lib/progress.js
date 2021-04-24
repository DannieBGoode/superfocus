var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

setProgress(0);

document.addEventListener('scroll', function(e) {
	var scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
	var scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;
	var scrollPercent = scrollTop / scrollBottom * 100;
	setProgress(scrollPercent);
});