import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface WaitlistData {
  email: string;
  platform: 'android' | 'ios' | 'firefox';
}

const getWaitlistEmailTemplate = (platform: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Intentionality Waitlist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0f1a2a;
            color: #e2e8f0;
            line-height: 1.6;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
            border-radius: 20px;
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logo {
            width: 48px;
            height: 48px;
            margin: 0 auto 20px;
            background: rgba(56, 189, 248, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: bold;
            background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .content {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
        }
        
        .title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .message {
            font-size: 16px;
            margin-bottom: 30px;
            line-height: 1.7;
        }
        
        .platform-badge {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(56, 189, 248, 0.2);
            border: 1px solid rgba(56, 189, 248, 0.3);
            border-radius: 20px;
            font-weight: 600;
            margin: 20px 0;
            text-align: center;
        }
        
        .features {
            margin: 30px 0;
        }
        
        .feature {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .checkmark {
            width: 20px;
            height: 20px;
            background: rgba(16, 185, 129, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            flex-shrink: 0;
        }
        
        .cta {
            text-align: center;
            margin: 40px 0;
        }
        
        .button {
            display: inline-block;
            padding: 16px 32px;
            background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #94a3b8;
            font-size: 14px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            color: #94a3b8;
            text-decoration: none;
            margin: 0 10px;
        }
        
        .social-links a:hover {
            color: #38bdf8;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <div style="font-size: 24px;">🎯</div>
            </div>
            <div class="logo-text">Intentionality</div>
        </div>
        
        <div class="content">
            <h1 class="title">Thanks for Joining the Waitlist!</h1>
            
            <div class="message">
                <p>We're thrilled you're interested in bringing intentional browsing to ${platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : 'Firefox'}.</p>
            </div>
            
            <div class="platform-badge">
                ${platform === 'ios' ? '📱 iOS App' : platform === 'android' ? '🤖 Android App' : '🦊 Firefox Extension'}
            </div>
            
            <div class="message">
                <p>You're now part of an exclusive group that gets early access when we launch. We're working hard to bring the same mindful browsing experience to ${platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : 'Firefox'}.</p>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="checkmark">✓</div>
                    <span>Early notification when we launch</span>
                </div>
                <div class="feature">
                    <div class="checkmark">✓</div>
                    <span>Priority access to beta testing</span>
                </div>
                <div class="feature">
                    <div class="checkmark">✓</div>
                    <span>Special launch discount for waitlist members</span>
                </div>
            </div>
            
            <div class="message">
                <p>While you wait, you can experience Intentionality right now on Chrome:</p>
            </div>
            
            <div class="cta">
                <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn" class="button">
                    Try Intentionality on Chrome
                </a>
            </div>
            
            <div class="message">
                <p>We're building tools to help you browse with purpose, not impulse. Your support helps us create a more focused digital world.</p>
            </div>
            
            <div class="footer">
                <div class="social-links">
                    <a href="https://github.com/nibodhdaware">GitHub</a> • 
                    <a href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn">Chrome Store</a>
                </div>
                <p>Built with intention in California</p>
                <p style="margin-top: 10px; font-size: 12px;">
                    You're receiving this email because you joined the Intentionality waitlist.<br>
                    Want to stop receiving these emails? Just reply to this message and we'll remove you.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistData = await request.json();
    const { email, platform } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate platform
    if (!['android', 'ios', 'firefox'].includes(platform)) {
      return NextResponse.json(
        { error: 'Invalid platform' },
        { status: 400 }
      );
    }

    // Send welcome email
    const emailContent = getWaitlistEmailTemplate(platform);
    const platformName = platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : 'Firefox';
    
    await resend.emails.send({
      from: 'info@intentionality.app',
      to: email,
      subject: `Welcome to the Intentionality ${platformName} Waitlist`,
      html: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: `Successfully joined the ${platformName} waitlist`,
    });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}