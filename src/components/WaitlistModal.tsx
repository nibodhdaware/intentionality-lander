"use client";

import React from 'react';
import Modal from '@/components/ui/modal';
import WaitlistForm from '@/components/WaitlistForm';
import AndroidIcon from './icons/AndroidIcon';
import IOSIcon from './icons/iOSIcon';
import FirefoxIcon from './icons/FirefoxIcon';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    platform: 'android' | 'ios' | 'firefox';
}

export default function WaitlistModal({ isOpen, onClose, platform }: WaitlistModalProps) {
    const platformInfo = {
        android: {
            name: 'Android',
            title: 'Get notified when Android launches',
            description: 'Be the first to know when our Android app is ready for download.'
        },
        ios: {
            name: 'iOS',
            title: 'Get notified when iOS launches',
            description: 'Join the waitlist and be the first to know when our iOS app arrives on the App Store.'
        },
        firefox: {
            name: 'Firefox',
            title: 'Get notified when Firefox launches',
            description: 'Join the waitlist for our Firefox extension and get notified as soon as it\'s available.'
        }
    };

    const info = platformInfo[platform];

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'android':
                return <AndroidIcon className="h-8 w-8 text-green-400" />;
            case 'ios':
                return <IOSIcon className="h-8 w-8 text-slate-400" />;
            case 'firefox':
                return <FirefoxIcon className="h-8 w-8 text-orange-400" />;
            default:
                return <AndroidIcon className="h-8 w-8 text-slate-400" />;
        }
    };

    const getPlatformBgColor = (platform: string) => {
        switch (platform) {
            case 'android':
                return 'bg-green-500/20';
            case 'ios':
                return 'bg-slate-200/10';
            case 'firefox':
                return 'bg-orange-500/20';
            default:
                return 'bg-slate-200/10';
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${getPlatformBgColor(platform)}`}>
                    {getPlatformIcon(platform)}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                    {info.title}
                </h2>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {info.description}
                </p>

                <WaitlistForm platform={platform} className="w-full" />
            </div>
        </Modal>
    );
}
