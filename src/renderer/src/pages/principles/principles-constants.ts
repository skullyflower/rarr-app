// Instead of opposite ego driven paralell?
export interface OneStep {
  step: number
  principle: string
  opposite: string
}

const StepCheckListRARR: OneStep[] = [
  {
    step: 1,
    principle: 'Acceptance',
    opposite: 'Denial'
  },
  {
    step: 2,
    principle: 'Belief',
    opposite: 'Doubt'
  },
  {
    step: 3,
    principle: 'Surrender',
    opposite: 'Running Amok'
  },
  {
    step: 4,
    principle: 'Admition',
    opposite: 'Secrecy'
  },
  {
    step: 5,
    principle: 'Integrity',
    opposite: 'Dishonesty'
  },
  {
    step: 6,
    principle: 'Relenting',
    opposite: 'Willfullness'
  },
  {
    step: 7,
    principle: 'Humility',
    opposite: 'Arrogance'
  },
  {
    step: 8,
    principle: 'Resurrection',
    opposite: 'Burial'
  },
  {
    step: 9,
    principle: 'Reparation',
    opposite: 'unaccountability'
  },
  {
    step: 10,
    principle: 'Discipline',
    opposite: 'Laziness'
  },
  {
    step: 11,
    principle: 'Rutual',
    opposite: 'Chaos'
  },
  {
    step: 12,
    principle: 'Servitude',
    opposite: 'Monsterousness'
  }
]

export const StepCheckListAA: OneStep[] = [
  {
    step: 1,
    principle: 'Honesty',
    opposite: 'Denial'
  },
  {
    step: 2,
    principle: 'Hope',
    opposite: 'Resignation'
  },
  {
    step: 3,
    principle: 'Surrender',
    opposite: 'Self-Will'
  },
  {
    step: 4,
    principle: 'Courage',
    opposite: 'Cowardice'
  },
  {
    step: 5,
    principle: 'Integrity',
    opposite: 'Dishonesty'
  },
  {
    step: 6,
    principle: 'Willingness',
    opposite: 'Willfullness'
  },
  {
    step: 7,
    principle: 'Humility',
    opposite: 'Arrogance'
  },
  {
    step: 8,
    principle: 'Love',
    opposite: 'Codependence'
  },
  {
    step: 9,
    principle: 'Responsibility',
    opposite: 'Blame'
  },
  {
    step: 10,
    principle: 'Discipline',
    opposite: 'Laziness'
  },
  {
    step: 11,
    principle: 'Awareness',
    opposite: 'Self Centeredness'
  },
  {
    step: 12,
    principle: 'Service',
    opposite: 'Bossiness'
  }
]

export const StepCheckListACA: OneStep[] = [
  {
    step: 1,
    principle: 'Powerlessness & Surrender',
    opposite: 'Denial'
  },
  {
    step: 2,
    principle: 'Open-Mindedness & Clarity',
    opposite: 'Resignation'
  },
  {
    step: 3,
    principle: 'Willingness & Accepting Help',
    opposite: 'Self-Will'
  },
  {
    step: 4,
    principle: 'Courage & Self-Honesty',
    opposite: 'Cowardice'
  },
  {
    step: 5,
    principle: 'Honesty & Trust',
    opposite: 'Dishonesty'
  },
  {
    step: 6,
    principle: 'Willingness',
    opposite: 'Willfullness'
  },
  {
    step: 7,
    principle: 'Humility',
    opposite: 'Arrogance'
  },
  {
    step: 8,
    principle: 'Willingness & Self-Forgiveness',
    opposite: 'Codependence'
  },
  {
    step: 9,
    principle: 'Forgiveness and Courage',
    opposite: 'Blame'
  },
  {
    step: 10,
    principle: 'Honesty & Discernment',
    opposite: 'Fogginess'
  },
  {
    step: 11,
    principle: 'Seeking & Listening',
    opposite: 'Perfectionism'
  },
  {
    step: 12,
    principle: 'Love and Self-Love',
    opposite: 'Judgementalness'
  }
]

export const StepCheckList: Record<string, OneStep[]> = {
  RARR: StepCheckListRARR,
  AA: StepCheckListAA,
  ACA: StepCheckListACA
}
