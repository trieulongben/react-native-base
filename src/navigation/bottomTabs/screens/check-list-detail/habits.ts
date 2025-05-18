import {IMAGES} from '@assets/images';
import {ECheckListExercise} from '@constants/checklist/checklist';

export type THabitsDetail = {
  id: ECheckListExercise;
  title: string;
  data: THabitsDetailElement[];
};

export type THabitsDetailElement = THabitsDetailImage | THabitsDetailCard;

export enum EHabitsDetailElement {
  IMAGE = 'IMAGE',
  CARD = 'CARD',
}

export type THabitsDetailImage = {
  image: keyof typeof IMAGES;
  type: EHabitsDetailElement.IMAGE;
};

export type THabitsDetailCard = {
  title: string;
  elements: THabitsDetailCardElement[];
  type: EHabitsDetailElement.CARD;
};

//Use array of elements for customizable
export type THabitsDetailCardElement =
  | THabitsDetailCardElementText
  | THabitsDetailCardElementTextDark
  | THabitsDetailCardElementLink
  | THabitsDetailCardElementImage;

export enum EHabitsDetailCardElement {
  TEXT = 'TEXT',
  TEXT_DARK = 'TEXT_DARK',
  LINK = 'LINK',
  IMAGE = 'IMAGE',
}

export type THabitsDetailCardElementImage = {
  image: string;
  type: EHabitsDetailCardElement.IMAGE;
};

export type THabitsDetailCardElementText = {
  title: string;
  description: string;
  type: EHabitsDetailCardElement.TEXT;
};

export type THabitsDetailCardElementTextDark = {
  title: string;
  description: string[];
  type: EHabitsDetailCardElement.TEXT_DARK;
};

export type THabitsDetailCardElementLink = {
  text: string;
  link: string;
  type: EHabitsDetailCardElement.LINK;
};

export const HABITS_DETAIL: Record<ECheckListExercise, THabitsDetail> = {
  [ECheckListExercise.SLEEP_ON_YOUR_SIDE]: {
    id: ECheckListExercise.SLEEP_ON_YOUR_SIDE,
    title: 'Positional therapy: Side sleeping',
    data: [
      {
        image: 'SLEEP_ON_YOUR_SIDE_DETAIL',
        type: EHabitsDetailElement.IMAGE,
      },
      {
        title: 'Overview',
        elements: [
          {
            title: '',
            description:
              'Side-sleeping is a simple and effective positional therapy for managing obstructive sleep apnea (OSA). By encouraging individuals to sleep on their side instead of their back, this method helps maintain an open airway, reducing snoring and apnea events. Many people with OSA find side-sleeping improves their breathing without the need for invasive treatments.',
            type: EHabitsDetailCardElement.TEXT,
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'Practical tips to side sleeping',
        elements: [
          {
            title: '',
            description:
              'If you’ve been a back sleeper, it can take a couple weeks to transition to comfortably side-sleeping. Here are some tips:',
            type: EHabitsDetailCardElement.TEXT,
          },
          {
            title: 'Use Side-Sleeping Pillows',
            description: [
              'Invest in specially designed pillows that encourage side-sleeping by providing neck and head support.\nConsider full-length body pillows to help maintain this position throughout the night.',
            ],
            type: EHabitsDetailCardElement.TEXT_DARK,
          },
          {
            title: 'DIY Positional Aids',
            description: [
              `Sew or attach a small object, like a tennis ball, to the back of your pajama top. This makes back-sleeping uncomfortable, naturally encouraging side-sleeping.
Use rolled towels or blankets as bolsters to prevent rolling onto your back.
Where a full backpack to make it impossible to flip onto your back`,
            ],
            type: EHabitsDetailCardElement.TEXT_DARK,
          },
          {
            title: 'Behavioral Conditioning',
            description: [
              `Begin each night lying on your side to develop a habit of falling asleep in this position.
Practice side-sleeping during naps to reinforce the behavior.`,
            ],
            type: EHabitsDetailCardElement.TEXT_DARK,
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Get a top-rated side-sleeping pillow',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'Why it works',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description: `Sleeping on your back (supine position) increases the likelihood of airway obstruction because gravity pulls the tongue and soft tissues in the throat backward, partially or fully blocking the airway. In contrast, side-sleeping counteracts this gravitational effect by keeping the airway clear. Studies have shown that side-sleeping significantly reduces the frequency and severity of apnea events in people with "positional OSA," a form of sleep apnea that is worsened by back-sleeping.

Additionally, side-sleeping promotes better oxygenation and airflow by ensuring that the airway remains unobstructed. This position may also reduce the risk of acid reflux, which can exacerbate nighttime breathing difficulties.
            `,
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
    ],
  },
  [ECheckListExercise.ELEVATE_YOUR_HEAD]: {
    id: ECheckListExercise.ELEVATE_YOUR_HEAD,
    title: 'Positional therapy: Elevation',
    data: [
      {
        image: 'ELEVATE_YOUR_HEAD_DETAIL',
        type: EHabitsDetailElement.IMAGE,
      },
      {
        title: 'Overview',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Elevation therapy is a positional strategy that involves raising the upper body during sleep to help reduce obstructive sleep apnea (OSA) symptoms. By sleeping in an inclined position, individuals can improve airflow and decrease the risk of airway collapse, leading to better breathing and a more restful night’s sleep. This method is particularly useful for those who experience issues related to both OSA and conditions like acid reflux.',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'How to do it',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Use Adjustable Beds',
            description: [
              `Invest in an adjustable bed frame that allows you to elevate the head of the bed to your desired angle.
The more the incline the more the benefit, but even a small incline is helpful`,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Try Wedge Pillows',
            description: [
              'Purchase a wedge pillow specifically designed to elevate the upper body.',
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'DIY Elevation Solutions',
            description: [
              `Place sturdy blocks or risers under the legs of your bed at the head to create an incline.
Place pillows underneath your mattress to elevate the front 25%`,
            ],
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Tutorial video on DIY elevation',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Top-rated mattress elevator',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'Why it works',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description: `When lying flat, gravity can cause the tongue and soft tissues in the throat to collapse backward, narrowing or completely blocking the airway. Elevating the upper body reduces the gravitational force on the airway, allowing for better airflow and minimizing obstructions. This position also decreases pressure on the diaphragm, promoting more efficient breathing.

Research shows that elevating the head and torso by 30 to 45 degrees can significantly reduce the frequency and severity of apnea events. However, even a small elevation can have large impacts - it was shown that just a 7 degree head & torso elevation decreased apnea events by 18%. 

Elevation may also help alleviate other conditions that exacerbate OSA, such as nasal congestion or acid reflux, which can further obstruct the airway when lying flat.`,
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
    ],
  },
  [ECheckListExercise.HUMIDITY_OVER_50]: {
    id: ECheckListExercise.HUMIDITY_OVER_50,
    title: 'Optimize Bedroom Humidity',
    data: [
      {
        image: 'HUMIDITY_OVER_50_DETAIL',
        type: EHabitsDetailElement.IMAGE,
      },
      {
        title: 'Overview',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Maintaining optimal humidity levels in your bedroom can improve sleep quality and help alleviate symptoms of obstructive sleep apnea. Dry air can irritate the nasal passages and throat, leading to inflammation and congestion that worsen breathing difficulties. By increasing humidity to the ideal range of 40–60%, you create a comfortable environment that supports better airflow and reduces airway irritation.',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'How to Maintain Optimal Humidity Levels in Your Bedroom',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Use a Humidifier',
            description: [
              `Invest in a high-quality humidifier to maintain humidity between 40-60%.
Choose one with a built-in hygrometer or set up a separate hygrometer to monitor levels accurately.`,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Monitor Humidity Regularly',
            description: [
              `Keep a digital hygrometer in the bedroom to ensure you’re staying within the 40-60% range.
Avoid over-humidification, which can promote allergens like mold.`,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Pair With an Air Purifier',
            description: [
              `Combine a humidifier with an air purifier to reduce airborne allergens while maintaining optimal humidity.
This is especially helpful if nasal irritation is aggravated by dust or pollen.`,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'DIY Humidity Boosts',
            description: [
              `Place a shallow bowl of water near a heat source or radiator to naturally add moisture to the air.
Incorporate indoor plants like peace lilies or areca palms, which release moisture into the air.`,
            ],
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: '$8 Humidity Monitor',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Recommended Humidifier',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Recommended Air Purifier',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'Why it works',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Low humidity levels can dry out the mucous membranes in the nose and throat, leading to irritation and inflammation. This can cause nasal congestion, forcing you to breathe through your mouth and increasing the likelihood of snoring and airway blockages. Proper humidity levels address these issues by:',
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: '',
            description: [
              'Moistening nasal passages: Reducing dryness and inflammation to improve airflow.',
              'Thinning mucus: Preventing the buildup of thick mucus that can obstruct the airway.',
              'Supporting natural defenses: Enhancing the function of cilia (tiny hairs in the airway) to clear mucus and irritants effectively.',
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Studies indicate that a bedroom humidity level between 40-60% is ideal for respiratory health, particularly for individuals with OSA. Levels below 30% are too dry, while levels above 60% can lead to excess moisture, encouraging mold and dust mites, which may exacerbate respiratory issues.',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
    ],
  },
  [ECheckListExercise.NASAL_STRIPS_OR_DIALATORS]: {
    id: ECheckListExercise.NASAL_STRIPS_OR_DIALATORS,
    title: 'Optimize Nasal Breathing',
    data: [
      {
        title: 'Overview',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Nasal strips and dilators are simple, non-invasive tools designed to improve airflow through the nasal passages during sleep. By physically opening the nasal passages, they reduce nasal resistance and improve breathing, which can help alleviate symptoms of obstructive sleep apnea and reduce snoring. These tools are especially helpful for individuals with nasal congestion or anatomical issues that restrict airflow.',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'How to Maintain Optimal Humidity Levels in Your Bedroom',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Choose the Right Product',
            description: [
              `Nasal Strips: Opt for high-quality adhesive strips designed for nighttime use. Choose the correct size for your nose to ensure effectiveness.
Nasal Dilators: Experiment with different shapes and sizes to find a comfortable fit. Options include soft silicone or plastic designs.`,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Use Nasal Dilators Correctly',
            description: [
              `Clean and dry your nose before inserting the dilator. \nGently insert the dilator into your nostrils, ensuring it fits comfortably without causing discomfort.
            `,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Insert Nasal Dilators Properly',
            description: [
              `Gently insert the dilator into your nostrils before bed. Ensure it feels secure but not uncomfortable.
Some designs are reusable; clean them daily to maintain hygiene.
            `,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Combine With Other Therapies',
            description: [
              `Pair nasal strips or dilators with positional therapy (side-sleeping or elevation) for greater effectiveness.
Use them alongside humidifiers to reduce nasal dryness and congestion.
            `,
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: 'Monitor Results',
            description: [
              `Track your sleep quality and snoring reduction while using nasal strips or dilators.
Consider sleep-tracking apps or wearables to measure improvements in breathing patterns.
            `,
            ],
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Top-rated nasal strips',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
          {
            type: EHabitsDetailCardElement.LINK,
            text: 'Recommended Nasal dilator',
            link: 'https://www.sleepfoundation.org/articles/side-sleeping-for-sleep-apnea',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
      {
        title: 'Why it works',
        elements: [
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Breathing through the nose is essential for optimal airflow during sleep. When nasal passages are partially blocked due to congestion, swelling, or structural issues (like a deviated septum), it forces individuals to breathe through their mouth, increasing the risk of snoring and airway collapse.',
          },
          {
            type: EHabitsDetailCardElement.TEXT_DARK,
            title: '',
            description: [
              'Nasal Strips: Adhesive strips applied externally across the nose gently lift and open the nostrils, reducing airway resistance. They mechanically widen the nasal passages, improving airflow without requiring medication.',
              'Nasal Dilators: Small devices inserted into the nostrils to keep them open from the inside. By maintaining an expanded airway, they prevent collapse and facilitate better nasal breathing.',
            ],
          },
          {
            type: EHabitsDetailCardElement.TEXT,
            title: '',
            description:
              'Studies show that improved nasal airflow can reduce the effort required to breathe and support better oxygenation, which is crucial for managing OSA symptoms.',
          },
        ],
        type: EHabitsDetailElement.CARD,
      },
    ],
  },
};
