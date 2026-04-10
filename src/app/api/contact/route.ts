import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, service, message } = body
    
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you can integrate with email service
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Integrate with email service
    // Options:
    // 1. SendGrid
    // 2. Resend
    // 3. NodeMailer
    // 4. AWS SES

    return NextResponse.json(
      { 
        success: true,
        message: 'Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint' },
    { status: 200 }
  )
}