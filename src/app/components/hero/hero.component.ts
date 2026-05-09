import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import Typed from 'typed.js';
import gsap from 'gsap';
import * as THREE from 'three';

// VANTA EFFECTS
declare var VANTA: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class Hero implements AfterViewInit, OnDestroy {
  
  @ViewChild('vantaContainer', { static: true }) vantaRef!: ElementRef;
  vantaEffect: any;

  ngAfterViewInit(): void {
    this.initTyped();
    this.initGSAP();
    this.initVantaBackground();
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  // -------------------------
  // TYPED.JS
  // -------------------------
  initTyped() {
    new Typed('#typewriter', {
      strings: [
        "Software Engineer",
        "AI and Automation Enthusiast"
      ],
      typeSpeed: 60,
      backSpeed: 26,
      loop: true,
    });
  }

  // -------------------------
  // GSAP HERO ANIMATIONS
  // -------------------------
  initGSAP() {
    gsap.from('.hero-title', {
      opacity: 0,
      y: -40,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 1.2,
      delay: 0.4,
      ease: "power4.out"
    });

    gsap.from('.hero-button', {
      opacity: 0,
      scale: 0.8,
      duration: 1.3,
      delay: 0.7,
      ease: "elastic.out(1,0.6)"
    });
  }

  // -------------------------
  // VANTA JS 3D BACKGROUND
  // -------------------------
  initVantaBackground() {
    this.vantaEffect = VANTA.NET({
      el: this.vantaRef.nativeElement,
      THREE: THREE,
      color: 0x1f5fff,
      backgroundColor: 0x000000,
      points: 12.0,
      maxDistance: 22.0,
      spacing: 16.0
    });
  }

  scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }
}
