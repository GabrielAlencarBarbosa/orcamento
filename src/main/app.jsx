import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css';
import React from 'react'
import './pdf.jsx'
import './data.js'
import { ReactDOM } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function app() {
    return (
        <div>
            
    <header>
        <div class="navbar">
            <div class="logo"><a href="#">Espaço SV</a></div>
            <ul class="links">
             <li><a href="sobre">Sobre</a></li>
             <li><a href="serviços">Serviços</a></li>
             <li><a href="contatos">Contatos</a></li>
            </ul>
            <a href="./form.jsx" class="action-btn">Orçamento</a>
          <div class="toggle-btn"> 
            <i class="fa-solid fa-bars"></i>
          </div>
          
         </div >
         <div class="dropdown-menu">
            <li><a href="hero">Home</a></li>
             <li><a href="sobre">sobre</a></li>
             <li><a href="serviços">serviços</a></li>
             <li><a href="contatos">contatos</a></li>
             <li><a href="#" class="action-btn">Orçamento</a></li>
          </div>
    </header>
    <main>
        <section id="hero">
            <h1>Bem Vindo</h1>
        </section>
    </main>

        </div>

    )
}

export default app;