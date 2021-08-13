const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
    

const timer = {
    isActive: false,
    startChangeColor(){
        if(this.isActive){
            return
        }
        this.isActive = true;
        
        this.changeColors = setInterval(() => {
            let indexOfColor = randomIntegerFromInterval(0, colors.length - 1);
            let randomColor = colors[indexOfColor];
            refs.body.style.backgroundColor = randomColor;
        }, 1000);
        
    },
    stopChangeColor() {
        clearInterval(this.changeColors);
        this.isActive = false;
    },
};

refs.btnStart.addEventListener('click', timer.startChangeColor.bind(timer));
refs.btnStop.addEventListener('click', timer.stopChangeColor.bind(timer));

