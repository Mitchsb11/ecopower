import input from "postcss/lib/input";
import { FormEvent } from "react";
import Stripe from "stripe";

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Créer Checkout Session.
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      '/api/checkout_sessions',
      { amount: 1000 },
    );
  
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }
  
    // Rediriger vers le paiement.
    const stripe = await getStripe();

    //Gestion erreur
    const { error } = await stripe!.redirectToCheckout({
      // Créer champ id plutôt que {{CHECKOUT_SESSION_ID}} .
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  };

function fetchPostJSON(arg0: string, arg1: { amount: number; }): Stripe.Checkout.Session | PromiseLike<Stripe.Checkout.Session> {
    throw new Error("Function not implemented.");
}
