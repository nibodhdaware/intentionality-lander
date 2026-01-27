"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import AndroidIcon from './icons/AndroidIcon';
import IOSIcon from './icons/iOSIcon';
import FirefoxIcon from './icons/FirefoxIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface WaitlistFormProps {
  platform: 'android' | 'ios' | 'firefox';
  className?: string;
  size?: 'compact' | 'full';
}

export default function WaitlistForm({ platform, className = "", size = 'full' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const platformInfo = {
    android: {
      name: 'Android',
      color: 'green',
      icon: <AndroidIcon className="h-6 w-6" />,
      description: 'Get notified when our Android app launches'
    },
    ios: {
      name: 'iOS',
      color: 'slate',
      icon: <IOSIcon className="h-6 w-6" />,
      description: 'Be the first to know when our iOS app is ready'
    },
    firefox: {
      name: 'Firefox',
      color: 'orange',
      icon: <FirefoxIcon className="h-6 w-6" />,
      description: 'Join the waitlist for our Firefox extension'
    }
  };

  const info = platformInfo[platform];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, platform }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (size === 'compact') {
    return (
      <div className={`w-full ${className}`}>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm">You're on the list!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-10"
              disabled={isSubmitting}
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-${info.color}-500 hover:bg-${info.color}-600 text-white h-10 px-4`}
              size="sm"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Join'
              )}
            </Button>
          </form>
        )}
        {error && (
          <p className="text-red-400 text-sm mt-2">{error}</p>
        )}
      </div>
    );
  }

  return (
    <Card className={`bg-white/5 border-white/10 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-${info.color}-500/20 flex items-center justify-center text-${info.color}-400`}>
            {info.icon}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">Join the {info.name} Waitlist</h3>
            <p className="text-slate-400 text-sm">{info.description}</p>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">You're on the list!</h4>
            <p className="text-slate-400">
              We'll notify you as soon as the {info.name} version is ready.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-${info.color}-500 hover:bg-${info.color}-600 text-white h-12 font-semibold`}
              size="lg"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Joining...</span>
                </div>
              ) : (
                'Join Waitlist'
              )}
            </Button>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-white/5">
          <p className="text-xs text-slate-500 text-center">
            No spam, ever. We'll only email you when {info.name} is ready.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}