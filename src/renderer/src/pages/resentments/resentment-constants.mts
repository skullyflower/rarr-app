export enum affectsAA {
  EMOTIONAL_SECURITY = "It's making me feel unsafe emotionally.",
  PHYSICAL_SECURITY = "It's making me feel unsafe emotionally physically.",
  FINANCIAL_SECURITY = "It's threatening my finances.",
  SELF_ESTEEM = "It's making me feel bad about myself. I feel weak, ashamed, or unworthy.",
  GUILTY = "It's making me feel guilty.",
  PROFESSIONAL_RELATIONSHIPS = "It's damaging my relationships with my boss, coworkers, or customers.",
  PERSONAL_RELATIONSHIPS = "It's damaging my relationships with friends and or family.",
  SEXUAL_RELATIONSHIP = "It's threatening my romantic or sexual relationships, imagined or real.",
  EGO = "It's threatening my sense of myself.",
  AMBITION = "It's threatening my getting what I want: big like a career, or small like the last chocolate doughnut."
}

export enum myPartsAA {
  SELFISH = 'Well, I was being a bit SELFISH. Thinking only about my wants and needs.',
  SELF_SEEKING = 'I was SELF SEEKING. I tried to manipulate the situation to make it come out the way I wanted.',
  DENIAL = "I wasn't being totally honest with myself.",
  DISHONEST_OTHERS = 'I lied to get my way.',
  DISHONEST_WITHHOLDING = 'I lied by omission -- withholding the truth.',
  FRIGHTENED = 'I reacted badly because I was afraid, or triggered, perhaps yelling something I did not really mean like, "I hate you!!"',
  HUNGRY = "I didn't eat when I should have, and it made me cranky.",
  ANGRY = "I was already angry about something else, and I wasn't able to be patient.",
  LONELY = 'I was isolating, and by the time I realized I was lonely it was too late.',
  TIRED = "I didn't sleep enough and wasn't able to cope with the situation."
}

export enum successesAA {
  CONNECTED = 'I reached out to a trusted friend or mentor for support.',
  WENT_TO_MEETING = 'I went to a meeting and shared about it.',
  WROTE = 'I took some time to journal about it.',
  PAUSED = 'I realized I was too upset to respond without making things worse, so I waiting until I could think more rationally.',
  PRAYED = 'I prayed to my Higher Power for help in dealing with the situation.',
  SET_BOUNDARY = 'I spoke up and set limits, or walked away from the bad situation.',
  MADE_AMENDS = "I realized I'd make a mistake and did my best to correct it.",
  SERVICE = 'I sought out someone else who needed help, or did service for my group.'
}

enum affectsACA {
  EMOTIONAL_SECURITY = "It's making me feel unsafe emotionally.",
  PHYSICAL_SECURITY = "It's making me feel unsafe physically.",
  FINANCIAL_SECURITY = "It's threatening my finances.",
  SELF_ESTEEM = "It's making me feel bad about myself.",
  EGO = "It's threatening my sense of myself.",
  PROFESSIONAL_RELATIONSHIPS = "It's damaging my relationships with my boss, coworkers, or customers.",
  PERSONAL_RELATIONSHIPS = "It's damaging my relationships with friends and or family.",
  SEXUAL_RELATIONSHIP = "It's threatening my romantic or sexual relationships, imagined or real.",
  AMBITION = "It's threatening my getting what I want. It could be big like a career, or small like the last chocolate doughnut."
}

enum myPartsACA {
  DENIAL = "I wasn't being totally honest with myself.",
  DONT_TRUST = "I didn't trust myself or that my Higher Power would take care of me. Maybe I expected to be hurt, disregarded, or betrayed by the other person.",
  DONT_TALK = "I didn't say what I needed to say, I didn't set a boundary, or I didn't ask for something I needed.",
  DONT_FEEL = 'I stuffed or denied my feelings.',
  FINE = "I denied (or didn't notice) I was having a problem.",
  FIGHT = 'I was argumentative. I tried to force my point of view on others, or I tried to control someone or some outcome.',
  FLIGHT = 'I withdrew, isolated or evaded to avoided conflict. Could be an internal conflict.',
  FREEZE = 'I got scared or overwhelmed, and froze or put off dealing with it.',
  FAWN = 'I tried to win someone over with charm, humor or by being who I think they want me to be.',
  FIX = "I tried to fix the situation. I took on more responsibility than was truly mine, or I tried to rescue someone else who didn't ask for my help.",
  SELF_DEFEATING = 'Maybe I did ask for help, but from the wrong person: someone who was sure to let me down or betray me. Or I let fear affect my behavior in a way that made the situation worse.',
  SELF_RELIANCE = "I didn't reach out to friends or my higher power for support.",
  SELF_CRITICAL = 'I was overly critical of myself.',
  CRITICAL_OF_OTHERS = 'I was harshly critical or dismissive of others.',
  CONTROLLING_OTHERS = 'I was trying to control the person or situation.',
  CONTROLLING_SELF = 'I was trying to control my feelings or reactions.',
  SOUGHT_APPROVAL = 'I over explained, or sought approval or validation from someone else, instead of approving of or believing myself.',
  PERFECTIONISM = 'I forgot that mistakes are just part of living and learning.',
  ALL_OR_NOTHING = 'I saw the situation from a rigid good/bad, pass/fail, right/wrong perspective with no room for nuance.',
  GUILT = 'I let guilt feelings stop me from taking the action necessary to take care and be responsible for myself.'
}
enum successesACA {
  CONNECTED = 'I reached out to a trusted friend or mentor for support.',
  WENT_TO_MEETING = 'I went to a meeting and shared about it.',
  WROTE = 'I took some time to journal about it.',
  PAUSED = 'I realized I was too upset to respond without sabotaging myself and/or being overly cruel to the other person, so I waiting until I could think more rationally.',
  PRAYED = 'I prayed. Asked my Higher Power for help in dealing with the situation.',
  SET_A_BOUNDARY = 'I spoke up and set limits or walked away from the bad situation.',
  SELF_VALIDATION = 'I listened to and validated my own needs feelings and thoughts.',
  AMENDS = "I realized I'd make a mistake, forgave myself, and admitted it",
  SELF_CARE = 'I bathed, ate good food, got myself to bed at a decent hour, or otherwise cared for myself.'
}

export const affects = { Angry: affectsAA, Hurt: affectsACA }
export const myParts = { Angry: myPartsAA, Hurt: myPartsACA }
export const successes = { Angry: successesAA, Hurt: successesACA }

export const strings = {
  Angry: {
    title: 'Anger is a weird thing.',
    intro: [
      'We feel that someone or something has wronged us or are otherwise frustrated by something in our lives. We feel they should be punished, stopped or changed.',
      'And yet, most of the time, we do nothing but punish ourselves with our angry thoughts.'
    ]
  },
  Hurt: {
    title: 'Feeling down?',
    intro: [
      'Life can be hard and people can be hurtful.',
      'We try and try, but things do not go our way, and everything we do seems to make it worse.'
    ]
  }
}
