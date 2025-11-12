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
  font-family: 'Inter', 'JetBrains Mono', 'specialFont', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

/* Global development elements */
.code-flow {
  position: relative;
  overflow: hidden;
}

.code-flow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #40e0d0, #00ff7f, transparent);
  animation: codeStream 3s linear infinite;
}

@keyframes codeStream {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Terminal glass morphism effect */
.terminal-glass {
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(64, 224, 208, 0.2);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Code gradient text */
.code-gradient {
  background: linear-gradient(135deg, #40e0d0, #00ff7f, #1e90ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Development button styles */
.btn-dev {
  background: linear-gradient(135deg, #40e0d0, #00ff7f);
  border: none;
  border-radius: 8px;
  color: #0d1117;
  padding: 12px 24px;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-dev::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.btn-dev:hover::before {
  left: 100%;
}

.btn-dev:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(64, 224, 208, 0.4);
  background: linear-gradient(135deg, #5ff5e5, #32ff9a);
}
</style>