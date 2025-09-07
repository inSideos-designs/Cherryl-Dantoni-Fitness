
import { ServiceCategory } from './types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    step: 1,
    name: 'Heal',
    title: 'Reconnect to your body, calm your nervous system, and create space for transformation.',
    description: 'We begin with the foundation — calming your nervous system, restoring balance, and reconnecting with your body through Reiki, mindful nutrition, and self-awareness practices.',
    bestFit: "you're feeling stressed, anxious, or stuck and need a reset.",
    image: 'https://picsum.photos/seed/heal/1200/800',
    services: [
      {
        title: '30-Min Reiki Reset',
        description: 'Perfect for first-timers or anyone needing a quick energy boost.',
      },
      {
        title: '60-Min Reiki Balance',
        description: 'A deeper session to restore harmony in mind, body, and spirit.',
      },
      {
        title: 'Reiki Memberships',
        description: 'Consistent energy healing to stay balanced month after month.',
      },
    ],
  },
  {
    step: 2,
    name: 'Release',
    title: 'Let go of what no longer serves you — emotional eating, people-pleasing, old habits, and self-doubt.',
    description: 'Next, we let go of what no longer serves you. This may look like releasing emotional eating patterns, people-pleasing tendencies, or the stress that\'s been weighing you down.',
    bestFit: "you're ready to shed limiting patterns and step into the real you.",
    image: 'https://picsum.photos/seed/release/1200/800',
    services: [
      {
        title: 'Pause. Reset. Thrive. (4-Week Program)',
        description: 'A guided reset to break free from overwhelm and reclaim your rhythm.',
      },
      {
        title: 'Emotional Eating Recovery Coaching',
        description: 'Learn to understand and release emotional food patterns while building healthier, supportive habits.',
      },
    ],
  },
  {
    step: 3,
    name: 'Thrive',
    title: 'Step into your next chapter with confidence, clarity, and a support system that keeps you moving forward.',
    description: 'Finally, we build the habits, mindset, and confidence to create lasting change. This is where you step into your next chapter feeling lighter, stronger, and fully aligned.',
    bestFit: 'you want lasting transformation, accountability, and momentum.',
    image: 'https://picsum.photos/seed/thrive/1200/800',
    services: [
      {
        title: 'Break Free & Thrive: 90-Day Transformation',
        description: 'For women ready to rediscover themselves and create a bold new path forward.',
      },
      {
        title: 'Accountability Memberships',
        description: 'Ongoing support to keep you on track.',
        subServices: [
            { title: "Weekly Reset: What's New & Good?", description: "Four 20-min check-ins each month to keep progress simple and consistent." },
            { title: "Monthly Breakthrough", description: "Set intentions, celebrate wins, and stay on track with monthly coaching support."}
        ]
      },
    ],
  },
];
