'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Roboblix" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Roboblix</span> is a blix
        (lego) based robotics program, where you will enjoy learning
        <span className="font-extrabold text-white"> STEM</span> and building real
        world project without feeling any pain whatsoever.
        <span className="font-extrabold text-white"> Think </span> to create something
        is the first nature of a children and that thought would be prototyped with the help of
        Roboblix. <span className="font-extrabold text-white">Build </span>
        anything you can imagine with blix. <span className="font-extrabold text-white">
        Program </span> is the life of a blix and for that you can use scratch program
        which is a command based programming language for kids.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
