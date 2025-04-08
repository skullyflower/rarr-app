export enum affectsAA {
  SECURITY_EMOTIONALLY = "It's making me feel unsafe emotionally.",
  SECURITY_PHYSICALLY = "It's making me feel unsafe emotionally physically.",
  SECURITY_FINANCIALLY = "It's making me feel unsafe financially.",
  SELF_ESTEEM = "It's making me feel bad about myself.",
  GUILTY = "It's making me feel guilty.",
  PERSONAL_RELATIONSHIPS = "It's damaging my relationships, with friends, family, or coworkers.",
  SEXUAL_RELATIONSHIP = "It's threatening my romantic or sexual relationships.",
  EGO = "It's threatening my ego, my sense of myself.",
  AMBITION = "It's threatening my getting what I want, big like a career, or small like the last chocolate doughnut"
}

export enum myPartsAA {
  SELFISH = 'Well, I was being a bit SELFISH. Thinking only about myself.',
  SELF_SEEKING = 'I was SELF SEEKING. I tried to manipulate the situation to make it come out the way I wanted.',
  DENIAL = "I wasn't being totally honest, with myself.",
  DISHONEST_OTHERS = 'I lied to get my way.',
  DISHONEST_WITHHOLDING = 'I lied by omission, withholding the truth.',
  FRIEGHTENED = 'I reacted badly because I was afraid, or triggered. \nMaybe you yelled something like, "I hate you!!"',
  HUNGRY = "I didn't eat when I should have and it made me cranky.",
  ANGRY = "I was already angry about something else, and wasn't able to be patient.",
  LONELY = 'I was isolating, and by the time I realized I was lonely, it was too late.',
  TIRED = "I didn't sleep enough and wasn't able to cope with the situation."
}

export enum sucessesAA {
  CONNECTED = 'I reached out to a trusted friend or mentor for support.',
  MEETING = 'I went to a meeting and shared about it.',
  WRITING = 'I took some time to journal about it.',
  PAUSED = 'I realized I was too upset to respond without sabotaging myself and/or being overly cruel to the other person, so I waiting until I could think more rationally.',
  PRAYED = 'I prayed to my Higher Power for help in dealing with the situation.',
  SET_BOUNDARY = 'I spoke up and set limits or walked away from the bad situation.',
  AMENDS = "I realized I'd make a mistake and admitted it",
  SERVICE = 'I sought out someone else who needed help, or did service for my group.'
}

enum affectsACA {
  SECURITY_EMOTIONALLY = "It's making me feel unsafe emotionally.",
  SECURITY_PHYSICALLY = "It's making me feel unsafe emotionally physically.",
  SECURITY_FINANCIALLY = "It's making me feel unsafe financially.",
  SELF_ESTEEM = "It's making me feel bad about myself.",
  EGO = "It's threatening my ego, my sense of self.",
  PERSONAL_RELATIONSHIPS = "It's damaging my relationships, with friends, family, or coworkers.",
  SEXUAL_RELATIONSHIP = "It's threatening my romantic or sexual relationships.",
  AMBITION = "It's threatening my getting what I want, big like a career, or small like the last chocolate doughnut"
}

enum myPartsACA {
  DENIAL = "I wasn't being totally honest, with myself.",
  DONT_TRUST = "I didn't trust myself or that my Hight Power would take care of me, or I expected to be hurt, diregarded or betrayed by the other person.",
  DONT_TALK = "I didn't say what I needed to say. I didn't set a boundary, or I didn't ask for something I needed.",
  DONT_FEEL = 'I stuffed or denied my feelings.',
  FINE = "I denied (or didn't notice) I was having a problem.",
  FIGHT = 'I was argumentitive. I tried to force my point of view on others, or tried to control them.',
  FLIGHT = 'I withdrew, isolated or evaded to avoided conflict.',
  FREEZE = 'I got scared or overwhelmed, froze or put off dealing with it.',
  FAWN = 'I tried to win them over with charm, humor or by being who I think they want me to be.',
  FIX = "I tried to fix the situation. I took on more responsibility than was truly mine, or I tried to rescue someone else who didn't ask for my help.",
  SELF_DEFEATING = 'I did ask for help, but from the wrong person: someone who was sure to let me down or betray me.',
  SELF_RELIANCE = "I didn't reach out to friends or my higher power for support.",
  CRITICAL_SELF = 'I was overly critical of myself.',
  CRITICAL_OTHERS = 'I was overly critical of someone else.',
  CONTROL_SELF = 'I was trying to control the person or situation.',
  CONTROL_OTHERS = 'I was trying to control my feelings or reactions.',
  SOUGHT_APPROVAL = 'I over explained. I sought approval or validation from someone else, instead of approving of or believing myself.',
  PERFECTIONISM = 'I forgot that mistakes are just part of living and learning.',
  ALL_OR_NOTHING = 'I saw the situation from a rigid good/bad, pass/fail, right/wrong perspective, with no room for nuance.',
  GUILT = 'I let guilt feelings stop me from taking the action necessary to take care and be responsible for myslef.'
}
enum sucessesACA {
  CONNECTED = 'I reached out to a trusted friend or mentor for support.',
  MEETING = 'I went to a meeting and shared about it.',
  WRITING = 'I took some time to journal about it.',
  PAUSED = 'I realized I was too upset to respond without sabotaging myself and/or being overly cruel to the other person, so I waiting until I could think more rationally.',
  PRAYED = 'I prayed to my Higher Power for help in dealing with the situation.',
  SET_BOUNDARY = 'I spoke up and set limits or walked away from the bad situation.',
  SELF_VALIDATION = 'I listed to and validated my own needs feelings and thoughts.',
  AMENDS = "I realized I'd make a mistake, forgave myself,  and admitted it",
  SELF_CARE = 'I took care of myself instead of trying to make someone else do it.'
}

export const affects = { AA: affectsAA, ACA: affectsACA }
export const myParts = { AA: myPartsAA, ACA: myPartsACA }
export const sucesses = { AA: sucessesAA, ACA: sucessesACA }
