import {VIDEO} from '@assets/video';
import {EExercise} from '@constants/exercise/exercises';

export enum EExerciseType {
  TIME_BASED = 'time_based',
  REPETITION_BASED = 'repetition_based',
}

type TExerciseDetail = {
  instructions: string[];
  tips: string[];
  sciences: string[];
  video: typeof VIDEO;
  type: EExerciseType;
};

export const EXERCISE_DETAIL: Record<EExercise, TExerciseDetail> = {
  [EExercise.MYO_WINDSHIELD_WIPER]: {
    instructions: [
      'Lift the tip of your tongue up to the roof and pull it way back.',
      'Move the tip of your tongue to the last molar on the top or behind it.',
      'Sweep the tip across the roof to the other side with good control.',
      'Move just the tongue and not your jaw. To stabilize your jaw initially, you can find something to bite down on.',
      'Go back and forth with control so it looks like a windshield wiper.',
      'Each time back and forth is 1 rep!',
      'Do it with lips closed and teeth lightly touching after you feel comfortable with mouth open :)',
    ],
    tips: [
      `The jaw should not move, only the tongue. If your having trouble keeping your jaw steady, bite down on something on one side of your mouth while you do the wipers. This will make it impossible for your jaw to move. (You can bite down on two fingers stacked on each other, if you don’t have a something to bite for jaw stabilization)

The tongue should look like a hot dog, long and skinny! The tongue should go to both sides equally. Wipers can be done with your teeth and lips closed once you get the hang of it. 

If the muscles are getting sore you know its working! Do this anytime from morning to night and when you finish your tongue will float up to the pocket!
      `,
    ],
    sciences: [],
    video: VIDEO.windshieldWiper,
    type: EExerciseType.REPETITION_BASED,
  },
  [EExercise.MYO_SUCK_IT_UP]: {
    instructions: [
      'Open 1-2 finger’s width and lift the tip of the tongue up in the pocket.',
      'Suck the tongue up in the roof of your mouth.',
      'Hold the suction and check your form using a MIRROR.',
      'The sides should be level so one side does not hang down.',
      'The sides of the tongue should be inside the arch. Keep the upper and lower jaws lined up straight.',
      'Press your tongue strongly to the roof of your mouth and then release it down so it makes a sound. This may take a few tries to get the hang of it',
      'Do them 1 second apart or slower, focus on good form!',
    ],
    tips: [
      `
      Make sure the lower jaw does not move, only the tongue. Press hard your tongue hard on your palate before releasing. Your goal is to create a loud noise upon the release! 
      Record how many in a row you can do before your tongue gets tired: looses form, gets sloppy, or begins to ache. After a break to let your muscles recover, continue until you fatigue again and so on. You may experience muscle soreness from the workout, this is normal. 
      This tones the muscles that suck the tongue up, and will help prevent your tongue from sliding back and blocking your airway during sleep.
      `,
    ],
    sciences: [],
    video: VIDEO.suckItUpNow,
    type: EExerciseType.REPETITION_BASED,
  },
  [EExercise.AIRBAG_HOLD]: {
    instructions: [
      'Breathe in as though you are about to yawn',
      'Do NOT breathe out yet',
      'While still holding in that air, puff your cheeks out',
      'Resume breathing slowly through your nose while continuing to puff your cheeks',
      'Using your fingers, gently press inward on each cheek as though you are pushing the air out of your mouth',
      'Continue to keep your lips together firmly',
      'Hold for 10 seconds',
    ],
    tips: [
      `Keep Your Lips Sealed: Ensure your lips remain firmly closed throughout the exercise. You may feel your lip muscles getting sore, this means its working!

This exercise strengthens the cheek & lip muscles, improves lip seal, and promotes nasal breathing, helping to improve snoring & sleep apnea. It can support better airway stability, improve chewing and swallowing functions and also contributes to facial symmetry.`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.airBagHold,
    type: EExerciseType.TIME_BASED,
  },
  [EExercise.EEH_OOH_AAH]: {
    instructions: [
      'Spread the lips to say the “EE” sound',
      'Hold the “EEEE” sound of 5 seconds',
      'Round the lips to say the “OOH” sound',
      'Hold the “OOH” sound of 5 seconds',
      'Open your mouth wide to say the “AAH” sound',
      'Hold the “AAH” sound of 5 seconds',
      'Rest for 10 seconds then repeat',
    ],
    tips: [
      `Exaggerate the Movements: Make the "EEH" "OOH," and "AAH" sounds with clear and exaggerated facial expressions.

Relax your neck and shoulders, keeping the focus on your face and jaw to prevent

This exercise strengthens the facial, lip, and jaw muscles by engaging them in controlled movements`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.eehOohAah,
    type: EExerciseType.TIME_BASED,
  },
  [EExercise.TIGER_YELL]: {
    instructions: [
      'Start by opening your mouth as wide as you comfortably can',
      'Mimic the facial features of a tiger about to roar',
      'With your mouth open as wide as possible, push your tongue out',
      'Move your tongue towards your chin, as far as you can',
      'Hold for 10 seconds',
      'Repeat',
    ],
    tips: [
      `Focus on the Stretch: You should feel a slight stretch in your tongue and jaw but stop if you feel pain.

Find a Comfortable Position: Sit or stand in a relaxed position with good posture to avoid straining your neck or back.

This throat muscles are a common source of problems for Obstructive Sleep apnea, so strengthening those long, thin muscles provides stability and makes collapse & snoring less likely. Mouth and throat exercises, like the Tiger Yell, work because they stimulate areas in the back of your mouth and throat that would otherwise be difficult to exercise, including your uvula.`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.tigerYell,
    type: EExerciseType.TIME_BASED,
  },
  [EExercise.MYO_PUSH_THE_BACK_UP]: {
    instructions: [
      'Use a mirror. Open your mouth 1 finger’s width.',
      'With the tongue tip down, pull the tongue back halfway.',
      'Say ‘K’ as in the word cup; the back of the tongue will push up.',
      'PUSH the back up into the palate above the level of the teeth.',
      'The sides of the tongue should go in, not spread out.',
      'The front of the tongue is relaxed and not lifting up.',
    ],
    tips: [
      `You may feel soreness in your tongue or in your throat

This important exercise strengthens the muscles that suck back saliva`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.pushTheBackUp,
    type: EExerciseType.REPETITION_BASED,
  },
  [EExercise.MYO_TUG_OF_WAR]: {
    instructions: [
      'Take half a paper towel and fold it till it is a thick line. This will be used to grab your tongue (can also use a towel or gauze)',
      'With the paper towel, hold the sides of your tongue using your thumb and index finger',
      'Pull your tongue back until it is pointing up to the pocket',
      'Squeeze the sides of your tongue in so it looks like a hot dog',
      'Pull BACK evenly with BOTH SIDES of your tongue',
      'Resist the pull with your fingers, don’t pull the tongue forward.',
      'Hold 10 seconds. Rest 15 seconds. Repeat.',
    ],
    tips: [
      'Keep it centered, don’t let it twist to the right or left. Keep your head straight. Keep your shoulders level. To level your shoulders, hold your wrist with your free hand. Tug steadily for 10 seconds. Remove your fingers. This exercise is working WRONG if the sides curl up like a taco, or you feel the sides spread or the tip pulls back or curls down. When you finish, your tongue will go back and up to the pocket.',
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.myoTongueTugOfWar,
    type: EExerciseType.TIME_BASED,
  },
  [EExercise.MYO_TONGUE_WRESTLE]: {
    instructions: [
      'Acquire a Popsicle Stick, or anything else to apply pressure to the top of your tongue',
      'Place the tongue depressor on your tongue and drag your tongue back till it is just behind your front teeth',
      'Keep the end of the stick that is in your hand higher than the end of the stick that is on your tongue',
      'Push your tongue up on the stick and Push down gently with the stick with your hand',
      'Hold 10 seconds. Take the stick out and rest 15 seconds. Repeat.',
      'The sides of the tongue should go in, not spread out.',
      'The front of the tongue is relaxed and not lifting up.',
    ],
    tips: [
      `The sides of your tongue should be pulled in like a HOT DOG shape. 

Keep your tongue centered and level. 

It is important to keep your head and shoulders level.`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.myoTongueWresle,
    type: EExerciseType.TIME_BASED,
  },
  [EExercise.SUCK_BACK_WITH_THE_SIDES]: {
    instructions: [
      'PRESS the tip of your tongue in the pocket firmly and hold it there.',
      'BITE your back teeth together.',
      'Open your lips wide so your cheeks are away from your teeth.',
      `SUCK BACK WITH THE SIDES OF YOUR TONGUE. It is not a slurp!

       a. You should hear a sound each rep, and feel it equally on both sides`,
    ],
    tips: [
      `Use a squirt bottle or take a sip of water if your mouth gets dry.

USE A MIRROR to check to see that the sides of the tongue are not spreading out between the side teeth and that the front of the tongue is not coming forward.`,
    ],
    sciences: [
      'Effects of 4-week tongue-training on sleep apnea severity. A plilot study',
    ],
    video: VIDEO.suckBackWithTheSides,
    type: EExerciseType.REPETITION_BASED,
  },
};
