import React from "react";
import { teamData } from "../data.js"; 
import SEO from "../components/SEO.jsx";
import { motion } from "framer-motion";

const TeamCard = ({ member, index }) => (
  // FIX: Added h-full to make all cards in a row the same height
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg h-full"
  >
    <img
      src={member.avatar}
      alt={member.name}
      className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-4 object-cover shadow-lg border-2 border-primary-light"
    />
    <h3 className="font-bold text-lg">{member.name}</h3>
    <p className="text-sm text-primary-dark">{member.role}</p>
  </motion.div>
);

export default function TeamPage() {
  const teams = Object.keys(teamData);

  return (
    <>
      <SEO title="Our Team" description="Meet the dedicated teams behind AAROHAN 2025." />
      <div className="py-20 px-4 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Our Teams:</h1>
          <div className="space-y-16">
            {teams.map((teamName) => (
              <section key={teamName}>
                <h2 className="text-3xl font-bold text-center mb-8 text-primary-dark">{teamName}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                  {teamData[teamName].map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
