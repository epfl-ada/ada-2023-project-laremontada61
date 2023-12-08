/*
Counts and displays how much ghg have been emitted since the start of the website visit
*/
function count_ghg_seconds(id, units, describ, color = "black", nb_ghg_sec = 1.17) {

  // Emitted ghg value starts at zero
  let current_value = 0;

  const style = "color: " + color;
  const root = $(id);

  root.append(`<div class="counter_value" style="${style}">${current_value}</div>`);
  root.append(`<div class="counter_units" style="${style}">${units}</div>`);
  root.append(`<div class="counter_describ">${describ}</div>`);

  setTimeout(() => {
     setInterval(() => {
        current_value += nb_ghg_sec;
        $(id + " .counter_value").html(Math.round(current_value * 100) / 100);
     }, 1000); // Increments every 1 second
  }, 10); // Starts 10ms after website loaded
}

count_ghg_seconds(
  "#ghg_counter",
  "CO<sub>2</sub>-equivalent tons",
  "of ghg emitted worldwide since the start of your visit"
);