const data = [
    {
      question: "True or False: The Bible is the most popular book ever written. (by copies sold)?",
      incorrectAnswers: [
        "Maybe",
        "Not sure",
        "False",
      ],
      correctAnswer: "True",
    },
  
    {
      question: "True or False: David wrote the entire book of Psalms.?",
      incorrectAnswers: [
        "Indifferent",
        "Not certain",
        "True: David wrote all",
      ],
      correctAnswer: " False: The Psalms are a collection by many writers, but David contributed the most.",
    },
    {
      question: "What is the shortest book in the Bible?",
      incorrectAnswers: ["Mark 11:22", "John 3:16", "Leviticus 2:3"],
      correctAnswer: "3 John",
    },
    {
      question: "How many books are in the Bible??",
      incorrectAnswers: ["33", "39", "27"],
      correctAnswer: "66",
    },
    {
      question: "Which New Testament book has Jesus' Sermon on the Mount?",
      incorrectAnswers: [
        "John",
        "Isaiah",
        "Proverbs",
      ],
      correctAnswer: "Matthew",
    },
    {
      question: "EL SHADDAI means?",
      incorrectAnswers: [
        "Great God",
        "Sovereign King",
        "The Faithful God",
      ],
      correctAnswer: "The Almighty God",
    },
    {
      question: "[And when Abram was ninety years old and nine, the Lord appeared to Abram, and said unto him, I am the Almighty God; walk before me, and be thou perfect] can be found where?",
      incorrectAnswers: ["Psalm 150:2", "Genesis 49:10", "Psalm 109:2"],
      correctAnswer: "Genesis 17:1",
    },
    {
      question: "ADONAI means?",
      incorrectAnswers: [
        "Eternal, Strong, King",
        "Good, Holy, Just",
        "Great, Mighty, God",
      ],
      correctAnswer: "Lord, Master, Owner, Ruler",
    },
    {
        question: "JEHOVAH: the personal NAME of God in His relationship as __________.?",
        incorrectAnswers: [
          "SAVIOUR",
          "RULER",
          "KING",
        ],
        correctAnswer: "REDEEMER",
    },
    {
        question: " In what language was most of the Old Testament given?",
        incorrectAnswers: [
          "English",
          "Indian",
          "Greek",
        ],
        correctAnswer: "Hebrew",
    },
    {
      question: "[These are the generations of the heavens and of the earth when they were created, in the day that the Lord God [Jehovah Elohim] made the earth and the heavens] is found where?",
      incorrectAnswers: [
        "Genesis 3:2",
        "Genesis 20:2",
        "Genesis 4:2",
      ],
      correctAnswer: "Genesis 2:4",
  },
  {
    question: "Who did God call out of Ur to move to Canaan?",
    incorrectAnswers: [
      "Luke",
      "Lot",
      "Sarah",
    ],
    correctAnswer: "Abram",
  },
  {
    question: "When God showed Abram the stars in the sky, what did he promise?",
    incorrectAnswers: [
      "That Abram would be great",
      "That Abram would be successful",
      "That Abram would marry another wife",
    ],
    correctAnswer: "That Abram would have more descendants than the number of stars.",
  },
  {
    question: " Who did Abraham send to find Isaac a wife?",
    incorrectAnswers: [
      "His slave",
      "His youngest servant",
      "His servant",
    ],
    correctAnswer: "His oldest servant",
  },
  {
    question: "How did Esau provide food for the family?",
    incorrectAnswers: [
      "He was a farmer",
      "He caught prey",
      "He was a shepherd",
    ],
    correctAnswer: "He hunted",
  },
  {
    question: "JEHOVAH NISSI means?",
    incorrectAnswers: [
      "The Lord my Saviour",
      "The Lord my Peace",
      "The Lord my protector",
    ],
    correctAnswer: "The Lord my Banner",
  },
  {
    question: "[He brought me to the banqueting house, and His banner over me was love] is found where?",
    incorrectAnswers: [
      "Psalm 2:4",
      "Proverbs 4:2",
      "Song of Solomon 4:2",
    ],
    correctAnswer: "Song of Solomon 2:4",
  },
  {
    question: "JEHOVAH SHALOM means?",
    incorrectAnswers: [
      "The Lord, He is God",
      "The Lord my Comforter",
      "The Lord my Saviour",
    ],
    correctAnswer: "The Lord my Peace",
  },
  {
    question: "[Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid] is found where?",
    incorrectAnswers: [
      "Mark 12:2",
      "John 2:14",
      "John 27:14",
    ],
    correctAnswer: "John 14:27",
  },
  {
    question: "JEHOVAH RAAH (ROI or ROHI) means?",
    incorrectAnswers: [
      "The Lord my Saviour",
      "The Lord my Keeper",
      "The Lord my Peace",
    ],
    correctAnswer: "The Lord my Shepherd",
  },
  {
    question: "[I am the Good Shepherd. The Good Shepherd risks and lays down His [own] life for the sheep] is found where?",
    incorrectAnswers: [
      "John 10:2",
      "Luke 10:19",
      "John 10:20",
    ],
    correctAnswer: "John 10:11",
  },
  {
    question: "Who did Isaac favor of his two sons?",
    incorrectAnswers: [
      "Deborah",
      "John",
      "Jacob",
    ],
    correctAnswer: "Esau",
  },
  {
    question: "Who was the judge who defeated the Midianites with only 300 men using torches and horns?",
    incorrectAnswers: [
      "Samson",
      "Josiah",
      "David",
    ],
    correctAnswer: "Gideon",
  },
  {
    question: "[In His days Judah shall be saved and Israel shall dwell safely: and this is His name by which He shall be called: The Lord Our Righteousness] is found where?",
    incorrectAnswers: [
      "Job 2:3",
      "John 3:17",
      "Jeremiah 29:11",
    ],
    correctAnswer: "Jeremiah 23:6",
  },
  {
    question: "JEHOVAH SABAOTH/TSEBAOTH means?",
    incorrectAnswers: [
      "The Lord our Banner",
      "The Supreme God",
      "The Lord of Heaven",
    ],
    correctAnswer: "The Lord of Hosts",
  },
  {
    question: "JEHOVAH SHAMMAH means?",
    incorrectAnswers: [
      "The Lord is King",
      "The Lord is Able",
      "The Lord is Here",
    ],
    correctAnswer: "The Lord is there",
  },
  {
    question: "[5) For He Himself has said, 'I will never leave you nor forsake you.'  6) So we may boldly say: 'The Lord is my helper; I will not fear. What can man do to me?'] is found where?",
    incorrectAnswers: [
      "John 13:5",
      "Hebrews 13:6",
      "Hebrews 13:5",
    ],
    correctAnswer: "Hebrews 13:5b-6",
  },
  {
    question: "With what did Samson kill 1,000 Philistines?",
    incorrectAnswers: [
      "A gate",
      "A stone",
      "His hands",
    ],
    correctAnswer: "A donkey's jawbone.",
  },
  {
    question: "What foreign country did David run away to?",
    incorrectAnswers: [
      "Ammon",
      "Median",
      "Egypt",
    ],
    correctAnswer: "The Land of the Philistines.",
  },
  {
    question: "How many times did David spare Saul's life?",
    incorrectAnswers: [
      "8",
      "12",
      "1",
    ],
    correctAnswer: "2",
  },
  ];
  
  export default data;