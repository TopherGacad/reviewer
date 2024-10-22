export const questions = [
    {
        id: 31,
        question: "What is the purpose of the phosphor layer in an intensifying screen?",
        options: [
          "It reflects the x-rays to the film",
          "It converts x-ray energy into visible light",
          "It absorbs excess light",
          "It provides mechanical support"
        ],
        correctAnswer: 1,
        rationale: "The phosphor layer in an intensifying screen converts x-ray energy into visible light to expose the film."
      },
      {
        id: 32,
        question: "Which type of scatter radiation is primarily responsible for degrading image contrast?",
        options: [
          "Compton scatter",
          "Photoelectric interaction",
          "Rayleigh scatter",
          "Pair production"
        ],
        correctAnswer: 0,
        rationale: "Compton scatter is the primary cause of degraded image contrast as it produces scattered x-rays that reach the image receptor."
      },
      {
        id: 33,
        question: "What is the principal function of a grid in radiography?",
        options: [
          "To increase the quantity of x-rays",
          "To improve spatial resolution",
          "To reduce the intensity of scatter radiation",
          "To decrease patient dose"
        ],
        correctAnswer: 2,
        rationale: "The primary function of a grid is to reduce the intensity of scattered radiation reaching the image receptor, thereby improving contrast."
      },
      {
        id: 34,
        question: "Which interaction is primarily responsible for the formation of the latent image in radiographic film?",
        options: [
          "Compton scattering",
          "Photoelectric interaction",
          "Pair production",
          "Rayleigh scattering"
        ],
        correctAnswer: 1,
        rationale: "The photoelectric interaction is responsible for forming the latent image by allowing complete absorption of x-rays in tissues."
      },
      {
        id: 35,
        question: "Which factor increases quantum mottle?",
        options: [
          "Increasing mAs",
          "Using a slower image receptor",
          "Decreasing kVp",
          "Using a fast screen"
        ],
        correctAnswer: 3,
        rationale: "Quantum mottle increases when using fast screens because they require fewer x-rays, resulting in more noise in the image."
      },
      {
        id: 36,
        question: "What effect does increasing the SID (source-to-image distance) have on the image?",
        options: [
          "Increases image contrast",
          "Increases magnification",
          "Decreases image sharpness",
          "Decreases image distortion"
        ],
        correctAnswer: 3,
        rationale: "Increasing the SID reduces image distortion and magnification, improving image sharpness."
      },
      {
        id: 37,
        question: "What is the purpose of added filtration in an x-ray tube?",
        options: [
          "To increase the intensity of the x-ray beam",
          "To remove low-energy x-rays",
          "To reduce the exposure time",
          "To reduce the focal spot size"
        ],
        correctAnswer: 1,
        rationale: "Added filtration removes low-energy x-rays that would otherwise increase patient dose without contributing to image formation."
      },
      {
        id: 38,
        question: "Which artifact is characterized by uniform dull gray fog on a radiograph?",
        options: [
          "Pi lines",
          "Guide shoe marks",
          "Chemical fog",
          "Curtain effect"
        ],
        correctAnswer: 2,
        rationale: "Chemical fog occurs when the film is improperly processed or when the processing chemicals are contaminated or exhausted."
      },
      {
        id: 39,
        question: "What is the correct term for the visible difference between light and dark areas on a radiograph?",
        options: [
          "Spatial resolution",
          "Optical density",
          "Contrast",
          "Image noise"
        ],
        correctAnswer: 2,
        rationale: "Contrast refers to the visible difference between the light and dark areas on a radiograph."
      },
      {
        id: 40,
        question: "Which component of the x-ray film contains the silver halide crystals?",
        options: [
          "Adhesive layer",
          "Emulsion",
          "Overcoat",
          "Base"
        ],
        correctAnswer: 1,
        rationale: "The emulsion layer contains silver halide crystals, which are essential for the formation of the latent image."
      },
      {
        id: 41,
        question: "Which of the following materials is commonly used in modern radiographic grids?",
        options: [
          "Calcium tungstate",
          "Lead",
          "Zinc",
          "Aluminum"
        ],
        correctAnswer: 1,
        rationale: "Lead is used in the construction of grids due to its high atomic number and ability to absorb scatter radiation."
      },
      {
        id: 42,
        question: "What is the primary advantage of using a high-ratio grid?",
        options: [
          "Decreases patient dose",
          "Increases the amount of scatter radiation",
          "Improves image contrast by absorbing more scatter radiation",
          "Increases x-ray beam penetrability"
        ],
        correctAnswer: 2,
        rationale: "A high-ratio grid absorbs more scatter radiation, which improves image contrast."
      },
      {
        id: 43,
        question: "Which device is used to measure the optical density of a radiograph?",
        options: [
          "Densitometer",
          "Sensitometer",
          "Penetrometer",
          "Dosimeter"
        ],
        correctAnswer: 0,
        rationale: "A densitometer is used to measure the optical density of processed radiographic film."
      },
      {
        id: 44,
        question: "What is the purpose of a reflective layer in an intensifying screen?",
        options: [
          "To absorb stray x-rays",
          "To enhance the efficiency by reflecting light toward the film",
          "To prevent image noise",
          "To reduce patient dose"
        ],
        correctAnswer: 1,
        rationale: "The reflective layer increases screen efficiency by redirecting light toward the film, improving image brightness."
      },
      {
        id: 45,
        question: "Which grid ratio is commonly used in general radiographic examinations?",
        options: [
          "5:1",
          "6:1",
          "8:1 to 10:1",
          "12:1"
        ],
        correctAnswer: 2,
        rationale: "Grid ratios of 8:1 to 10:1 are commonly used in general radiographic exams because they provide a balance between contrast improvement and patient dose."
      },
      {
        id: 46,
        question: "Which component of radiographic film provides a rigid structure and supports the emulsion?",
        options: [
          "Overcoat",
          "Base",
          "Adhesive layer",
          "Silver halide crystals"
        ],
        correctAnswer: 1,
        rationale: "The base of the radiographic film provides the mechanical support for the emulsion and the other layers."
      },
      {
        id: 47,
        question: "What is the primary purpose of a beam collimator?",
        options: [
          "To filter low-energy x-rays",
          "To focus x-rays onto the film",
          "To limit the size of the x-ray beam",
          "To measure the intensity of the x-ray beam"
        ],
        correctAnswer: 2,
        rationale: "The collimator restricts the size of the x-ray beam to reduce scatter radiation and patient exposure."
      },
      {
        id: 48,
        question: "Which technique reduces the probability of producing scatter radiation?",
        options: [
          "Increasing kVp",
          "Decreasing field size",
          "Using a fast image receptor",
          "Increasing patient thickness"
        ],
        correctAnswer: 1,
        rationale: "Decreasing the field size reduces the amount of tissue irradiated, which lowers the probability of producing scatter radiation."
      },
      {
        id: 49,
        question: "What is the most common cause of grid cutoff?",
        options: [
          "Improper grid alignment",
          "Excessive patient thickness",
          "Incorrect kVp",
          "Using a fast screen"
        ],
        correctAnswer: 0,
        rationale: "Grid cutoff occurs when the grid is not properly aligned with the x-ray beam, resulting in an underexposed image."
      },
      {
        id: 50,
        question: "What is the primary disadvantage of using a high-ratio grid?",
        options: [
          "Increased patient dose",
          "Decreased image contrast",
          "Increased scatter radiation",
          "Decreased beam penetrability"
        ],
        correctAnswer: 0,
        rationale: "A high-ratio grid absorbs more scattered radiation but also requires higher exposure levels, leading to increased patient dose."
      },
      {
        id: 51,
        question: "Which part of the x-ray film construction helps protect the emulsion from scratches and other damage?",
        options: [
          "Adhesive layer",
          "Overcoat",
          "Base",
          "Silver halide crystals"
        ],
        correctAnswer: 1,
        rationale: "The overcoat layer protects the emulsion from scratches, pressure, and other handling damage."
      },
      {
        id: 52,
        question: "What is the function of the gelatin in the emulsion layer of the radiographic film?",
        options: [
          "It provides a smooth surface for easy handling",
          "It reduces scatter radiation",
          "It holds the silver halide crystals uniformly in place",
          "It enhances the image contrast"
        ],
        correctAnswer: 2,
        rationale: "The gelatin holds the silver halide crystals in place and allows for even exposure to x-rays and light."
      },
      {
        id: 53,
        question: "Which of the following is an effect of using a fast intensifying screen?",
        options: [
          "Improved image detail",
          "Increased quantum mottle",
          "Decreased exposure time",
          "Lower patient dose"
        ],
        correctAnswer: 1,
        rationale: "Fast screens produce increased quantum mottle because fewer x-rays are used, resulting in a grainier image."
      },
      {
        id: 54,
        question: "What type of x-rays are primarily responsible for the optical density on a radiograph?",
        options: [
          "Compton scattered x-rays",
          "Photoelectric absorbed x-rays",
          "Transmitted x-rays",
          "Secondary radiation"
        ],
        correctAnswer: 2,
        rationale: "Transmitted x-rays that pass through the patient without interacting are responsible for the optical density on a radiograph."
      },
      {
        id: 55,
        question: "Which term describes the range of densities visible on a radiograph?",
        options: [
          "Latitude",
          "Contrast",
          "Speed",
          "Optical density"
        ],
        correctAnswer: 0,
        rationale: "Latitude refers to the range of exposures that produce acceptable optical densities on a radiograph."
      },
      {
        id: 56,
        question: "What is the primary purpose of a compensating filter in radiography?",
        options: [
          "To reduce scatter radiation",
          "To improve contrast resolution",
          "To produce a more uniform exposure across the image receptor",
          "To decrease exposure time"
        ],
        correctAnswer: 2,
        rationale: "A compensating filter is used to even out exposure in areas of varying thickness, ensuring a more uniform image."
      },
      {
        id: 57,
        question: "Which term refers to the emission of light from a phosphor during stimulation by x-rays?",
        options: [
          "Fluorescence",
          "Phosphorescence",
          "Isotropic emission",
          "Radiation fog"
        ],
        correctAnswer: 0,
        rationale: "Fluorescence is the emission of light during stimulation by x-rays, while phosphorescence continues after the stimulation ends."
      },
      {
        id: 58,
        question: "What is the function of a grid in radiographic imaging?",
        options: [
          "To reduce patient dose",
          "To increase the intensity of the x-ray beam",
          "To absorb scatter radiation before it reaches the image receptor",
          "To increase image brightness"
        ],
        correctAnswer: 2,
        rationale: "A grid absorbs scatter radiation before it reaches the image receptor, improving image contrast."
      },
      {
        id: 59,
        question: "Which material is commonly used as the base in radiographic film?",
        options: [
          "Cellulose nitrate",
          "Polyester",
          "Cellulose acetate",
          "Lead"
        ],
        correctAnswer: 1,
        rationale: "Modern radiographic films use polyester as the base material due to its strength, flexibility, and resistance to aging."
      },
      {
        id: 60,
        question: "What is the function of the activator in the developer solution?",
        options: [
          "To reduce fogging",
          "To produce alkalinity and control pH",
          "To control the rate of reduction",
          "To harden the emulsion"
        ],
        correctAnswer: 1,
        rationale: "The activator in the developer solution increases the pH to create an alkaline environment, which helps swell the emulsion and aids in the development process."
      }
]