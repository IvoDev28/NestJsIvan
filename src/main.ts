import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name,age } from './bases/01-types';
//import { pokemonIds } from './bases/02-objects.ts';
//import { charmander } from './bases/03-clases.ts';
import {charmander} from './bases/04-inyection.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <p>Buenas! me llamo ${name}, tengo ${age} ${charmander}años</p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
