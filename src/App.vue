<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

@font-face {
  font-family: 'Roboto';
  src: url('assets/roboto/Roboto-Regular.ttf') format('ttf'),
  url('assets/roboto/Roboto-Regular.ttf') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'specialFont';
  src: url('assets/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4a0Ew.woff2') format('woff2'),
  url('assets/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1O4a0Ew.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

#app {
  font-family: 'Inter', 'specialFont', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

/* Global musical elements */
.sound-wave {
  position: relative;
  overflow: hidden;
}

.sound-wave::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7877c6, #ff77c6, transparent);
  animation: soundWave 3s linear infinite;
}

@keyframes soundWave {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #7877c6, #ff77c6, #78dbff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Button styles */
.btn-musical {
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  border: none;
  border-radius: 25px;
  color: white;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-musical::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-musical:hover::before {
  left: 100%;
}

.btn-musical:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(120, 119, 198, 0.3);
}
</style>