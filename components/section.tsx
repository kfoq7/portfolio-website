import React from 'react'
import { motion } from 'framer-motion'

export const Divider = () => (
  <motion.div
    className="bg-gray-200 mt-20 mb-24 h-16 w-1 rounded-full hidden sm:block"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
  ></motion.div>
)

export const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="text-3xl font-medium capitalize mb-8 text-center">{children}</div>
)
