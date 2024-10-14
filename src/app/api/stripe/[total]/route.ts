import { auth, currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export function absoluteUrl(path: string) {
    return `${'http://localhost:4000/'}${path}`
  }
const settingsUrl = absoluteUrl("/settings");
export async function GET(req: NextRequest) 
{
  
  const segments = req.url.split('/');  // Split the URL into segments by "/"
  const totalValue = segments[segments.length - 1] as any;  // Get the last segment



  try {

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "payment", 
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ['FR', 'DE'], 
      },
      line_items: [
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "Panier",
            },
            unit_amount: totalValue*100,  
          },
          quantity: 1,
        },
      ],
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'EUR',
            },
            display_name: 'Standard shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3
              },
              maximum: {
                unit: 'business_day',
                value: 5
              }
            }
          }
        },
      ],
      metadata: {
        
        tier: 2
      },
    });

    // Return the Stripe session URL in the response
    return new NextResponse(JSON.stringify({ url: stripeSession.url }), { status: 200 });
  } catch (error) {
    console.error("ERROR", error);
    console.error("[STRIPE]", error);
    // It is better to return an error status code like 500 for internal errors
    return new NextResponse("Internal Error", { status: 500 });
  }
};