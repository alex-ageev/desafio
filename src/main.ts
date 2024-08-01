// ./main.ts

import { factory } from './factory';

let count = factory(0, 1);

function update_count() {
  console.log('click!');
  const currentValue = count();
  console.log('curr val: ', currentValue);
  current_count.textContent = currentValue.toString();
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;
const step_control = document.getElementById('step') as HTMLInputElement;
const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;
const current_count = document.querySelector(
  '.current_count',
) as HTMLSpanElement;

count_button.addEventListener('click', update_count);

// func to reset counter and update display
function update_count_and_reset_counter() {
  const startValue = parseInt(start_at_control.value, 10) || 0;
  const stepValue = parseInt(step_control.value, 10) || 1;
  count = factory(startValue, stepValue); // Reinitialize counter function with new vals
  current_count.textContent = startValue.toString(); // Reset the display to start
}

start_at_control.addEventListener('change', update_count_and_reset_counter);
step_control.addEventListener('change', update_count_and_reset_counter);
