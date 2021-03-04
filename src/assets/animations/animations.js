import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';

gsap.registerPlugin(MotionPathPlugin);

// ANIMATIMATIONS FOR LOGIN/REGISTER SCREEN

export const LoginDocumentsAnimation = (item1, item2, item3, item4) => {
  gsap.to(item1, {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 15, y: 0 },
        { x: 7, y: 30 },
      ],
      curviness: 2,
    },
    duration: 10,
    repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
  });
  gsap.to(item2, {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
        { x: 5, y: -30 },
      ],
      curviness: 2,
    },
    duration: 10,
    repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
  });
  gsap.to(item3, {
    motionPath: {
      path: [
        { x: 0, y: 10 },
        { x: 40, y: 12 },
        { x: 40, y: 25 },
      ],
      curviness: 1,
    },
    duration: 12,
    repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
  });
  gsap.to(item4, {
    motionPath: {
      path: [
        { x: 10, y: 10 },
        { x: 20, y: 12 },
        { x: 20, y: 25 },
      ],
      curviness: 1,
    },
    duration: 12,
    repeat: -1,
    ease: 'power1.inOut',
    yoyo: true,
  });
};

export const firstDocAnimation = {
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 15, y: 0 },
      { x: 7, y: 30 },
    ],
    curviness: 2,
  },
  duration: 10,
  repeat: -1,
  ease: 'power1.inOut',
  yoyo: true,
};

export const secondDocAnimation = {
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 5, y: -30 },
    ],
    curviness: 2,
  },
  duration: 10,
  repeat: -1,
  ease: 'power1.inOut',
  yoyo: true,
};

export const thirdDocAnimation = {
  motionPath: {
    path: [
      { x: 0, y: 10 },
      { x: 40, y: 12 },
      { x: 40, y: 25 },
    ],
    curviness: 1,
  },
  duration: 12,
  repeat: -1,
  ease: 'power1.inOut',
  yoyo: true,
};

export const fourthDocAnimation = {
  motionPath: {
    path: [
      { x: 10, y: 10 },
      { x: 20, y: 12 },
      { x: 20, y: 25 },
    ],
    curviness: 1,
  },
  duration: 12,
  repeat: -1,
  ease: 'power1.inOut',
  yoyo: true,
};

// ANIMATIONS FOR MENU

export const menuOnAnimation = (item1, item2, item3) => {
  if (window.innerWidth < 992) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      item1,
      { x: '-100%', autoAlpha: 0 },
      { duration: 0.4, x: 0, autoAlpha: 1 }
    )
      .fromTo(
        item2,
        { x: '-100%', autoAlpha: 0 },
        { duration: 0.6, x: 0, autoAlpha: 1 },
        '-=0.4'
      )
      .fromTo(
        item3,
        {
          autoAlpha: 0,
          x: '+=70',
        },
        {
          ease: 'back.out',
          duration: 0.3,
          autoAlpha: 1,
          x: 0,
        },
        '-=0.2'
      );
  }
};

export const menuOffAnimation = (item1, item2, item3) => {
  if (window.innerWidth < 992) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.to(item1, {
      ease: 'back.in',
      duration: 0.3,
      autoAlpha: 0,
      x: '+=70',
    })
      .to(item2, { duration: 0.6, x: '-100%', autoAlpha: 0 }, '-=0.2')
      .to(item3, { duration: 0.4, x: '-100%', autoAlpha: 0 }, '-=0.4');
  }
};

// ANIMATION FOR SLIDEINFO

export const slideInfoAnimation = (slideBox) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
  tl.set(slideBox, { autoAlpha: 0, y: 100 });

  tl.to(slideBox, { duration: 0.7, autoAlpha: 1, y: 0 }).to(
    slideBox,
    { duration: 0.7, autoAlpha: 0, y: '+=100' },
    '+=2.5'
  );
};
