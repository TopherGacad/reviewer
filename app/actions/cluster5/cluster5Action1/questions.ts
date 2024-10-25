export const questions = [
    {
        "id": 1,
        "question": "Which MRI contrast parameter is crucial for determining the length of longitudinal relaxation time?",
        "options": [
          "T1",
          "T2",
          "TR",
          "TE"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "T1 relaxation time, also known as spin-lattice relaxation time, represents the time for 63% of the longitudinal magnetization to recover."
    },
    {
        "id": 2,
        "question": "What is the typical gyromagnetic ratio for hydrogen protons in a 1 Tesla magnetic field?",
        "options": [
          "21 MHz",
          "42.58 MHz",
          "63.87 MHz",
          "85 MHz"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "The gyromagnetic ratio for hydrogen is 42.58 MHz/Tesla, so at 1 Tesla, the precessional frequency of hydrogen protons is 42.58 MHz."
    },
    {
        "id": 3,
        "question": "Which method is used to correct magnetic field inhomogeneities in MRI?",
        "options": [
          "Resonance",
          "Shimming",
          "Quenching",
          "Saturation"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Shimming is the process of making adjustments to improve magnetic field homogeneity, either through electromagnetic coils (active shimming) or mechanical adjustments (passive shimming)."
    },
    {
        "id": 4,
        "question": "Which type of coil is typically used for localizing specific small areas in MRI and improving signal-to-noise ratio (SNR)?",
        "options": [
          "Body coil",
          "Surface coil",
          "Gradient coil",
          "RF coil"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Surface coils are used to receive signals from a small, localized area and provide a high signal-to-noise ratio (SNR) due to their proximity to the region of interest."
    },
    {
        "id": 5,
        "question": "Which MRI sequence is best for highlighting water content and pathologies in tissue?",
        "options": [
          "T1-weighted imaging",
          "Proton density-weighted imaging",
          "T2-weighted imaging",
          "Gradient echo imaging"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "T2-weighted imaging is used to emphasize differences in water content, making it ideal for identifying pathologies that involve water accumulation, such as edema or inflammation."
    },
    {
        "id": 6,
        "question": "What is the primary advantage of using superconducting magnets in MRI scanners?",
        "options": [
          "Low operating cost",
          "No cooling requirements",
          "No fringe field effects",
          "Uses electromagnetic induction"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "Superconducting magnets provide high magnetic field strength with low operating cost, and they require cryogens like liquid helium for cooling to maintain superconductivity."
    },
    {
        "id": 7,
        "question": "What is the cause of the loud acoustic noise heard during an MRI scan?",
        "options": [
          "RF coil",
          "Shim coil",
          "Gradient coil",
          "Magnet coil"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "The gradient coils produce loud acoustic noise during the MRI scan as they rapidly switch on and off to create spatial encoding of the MR signal."
    },
    {
        "id": 8,
        "question": "Which artifact occurs when anatomy outside the field of view is incorrectly wrapped into the image?",
        "options": [
          "Chemical shift",
          "Aliasing",
          "Zipper artifact",
          "Motion artifact"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Aliasing, also known as wrap-around artifact, occurs when anatomy outside the field of view is improperly included in the reconstructed image due to insufficient spatial coverage."
    },
    {
        "id": 9,
        "question": "Which factor is most effective for improving signal-to-noise ratio (SNR) in MRI?",
        "options": [
          "Decreasing slice thickness",
          "Using a smaller field of view (FOV)",
          "Increasing the number of signal averages (NSA)",
          "Reducing repetition time (TR)"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Increasing the number of signal averages (NSA) improves SNR by reducing noise through signal averaging, although it may also increase scan time."
    },
    {
        "id": 10,
        "question": "What is the term for the rapid switching of the magnetic field in MRI, responsible for spatial encoding?",
        "options": [
          "Gradient fields",
          "RF pulses",
          "Shim fields",
          "Precession"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "Gradient fields are responsible for spatial encoding in MRI, as they create localized variations in the magnetic field strength."
    },
    {
        "id": 11,
        "question": "What is the precessional frequency of hydrogen protons at 1.5 Tesla?",
        "options": [
          "21.29 MHz",
          "42.58 MHz",
          "63.87 MHz",
          "84 MHz"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "At 1.5 Tesla, the precessional frequency of hydrogen protons is approximately 63.87 MHz, based on the gyromagnetic ratio of 42.58 MHz/T."
    },
    {
        "id": 12,
        "question": "Which MRI weighting is typically used for detecting pathology due to high water content?",
        "options": [
          "T1-weighted",
          "T2-weighted",
          "Proton density-weighted",
          "Gradient echo"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "T2-weighted images are used to highlight water content, making them ideal for detecting pathology such as edema or inflammation."
    },
    {
        "id": 13,
        "question": "What is the most common cause of motion artifacts in MRI?",
        "options": [
          "Magnetic field inhomogeneity",
          "Respiration or heartbeats",
          "Chemical shift",
          "Gradient coil malfunction"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Motion artifacts in MRI are typically caused by involuntary movements such as breathing or heartbeats, leading to ghosting or blurring of the image."
    },
    {
        "id": 14,
        "question": "What is the role of the RF coil in MRI?",
        "options": [
          "Creating the static magnetic field",
          "Producing the gradient fields",
          "Transmitting and receiving RF signals",
          "Correcting magnetic field inhomogeneities"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "The RF coil in MRI is responsible for transmitting radiofrequency pulses and receiving the MR signal from the patient."
    },
    {
        "id": 15,
        "question": "Which of the following factors will reduce the scan time in MRI?",
        "options": [
          "Decreasing TR (repetition time)",
          "Increasing the number of signal averages (NSA)",
          "Decreasing the matrix size",
          "Using a smaller slice thickness"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "Decreasing the repetition time (TR) allows for quicker data acquisition, thus reducing the overall scan time."
    },
    {
        "id": 16,
        "question": "Which type of artifact is caused by the presence of metallic implants in a patient?",
        "options": [
          "Zipper artifact",
          "Chemical shift",
          "Magnetic susceptibility artifact",
          "Aliasing"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Magnetic susceptibility artifacts are caused by variations in the magnetic field near metallic objects, leading to distortions in the MRI image."
    },
    {
        "id": 17,
        "question": "What is the main advantage of using gadolinium as a contrast agent in MRI?",
        "options": [
          "It shortens T2 relaxation time",
          "It produces brighter images on T2-weighted scans",
          "It shortens T1 relaxation time",
          "It eliminates all artifacts"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Gadolinium shortens T1 relaxation time, enhancing the contrast between tissues in T1-weighted images."
    },
    {
        "id": 18,
        "question": "Which of the following is an intrinsic contrast parameter in MRI?",
        "options": [
          "TR (repetition time)",
          "TE (echo time)",
          "Flip angle",
          "Proton density"
        ],
        "correctAnswer": 3, // was 4
        "rationale": "Proton density is an intrinsic contrast parameter because it is a property of the tissue itself and cannot be adjusted by the MRI technologist."
    },
    {
        "id": 19,
        "question": "Which MRI artifact is caused by the difference in resonant frequencies between fat and water?",
        "options": [
          "Chemical shift",
          "Magnetic susceptibility",
          "Motion artifact",
          "Aliasing"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "Chemical shift artifact occurs due to the differences in resonant frequencies between fat and water, leading to displacement of tissues in the image."
    },
    {
        "id": 20,
        "question": "Which of the following will increase the spatial resolution in an MRI scan?",
        "options": [
          "Increasing the field of view (FOV)",
          "Decreasing the matrix size",
          "Increasing the slice thickness",
          "Decreasing the voxel size"
        ],
        "correctAnswer": 3, // was 4
        "rationale": "Decreasing the voxel size (smaller pixel and thinner slices) increases spatial resolution, allowing for better distinction between small structures."
    },
    {
        "id": 21,
        "question": "Which type of MRI coil is typically used for both transmitting RF pulses and receiving the MR signal?",
        "options": [
          "Gradient coil",
          "Surface coil",
          "Transceiver coil",
          "Shim coil"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Transceiver coils are designed to both transmit RF pulses and receive MR signals, making them essential for head and body imaging in MRI."
    },
    {
        "id": 22,
        "question": "Which of the following artifacts is commonly observed when scanning tissues near air or bone interfaces due to differences in magnetic susceptibility?",
        "options": [
          "Chemical shift artifact",
          "Susceptibility artifact",
          "Motion artifact",
          "Zipper artifact"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Susceptibility artifacts occur at interfaces between tissues with different magnetic susceptibilities, such as bone and air, and cause image distortion."
    },
    {
        "id": 23,
        "question": "Which of the following sequences is most likely to be used for detecting brain abnormalities following a stroke?",
        "options": [
          "T1-weighted imaging",
          "T2-weighted imaging",
          "Diffusion-weighted imaging (DWI)",
          "Proton density-weighted imaging"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Diffusion-weighted imaging (DWI) is particularly useful for detecting brain abnormalities, especially following an acute stroke, as it highlights restricted water movement in ischemic tissues."
    },
    {
        "id": 24,
        "question": "In which direction do hydrogen protons precess when exposed to a magnetic field in MRI?",
        "options": [
          "In the direction of the magnetic field",
          "Perpendicular to the magnetic field",
          "Opposite to the magnetic field",
          "In a random direction"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "When hydrogen protons are exposed to a magnetic field, they precess in the same direction as the magnetic field, aligning either parallel or anti-parallel to it."
    },
    {
        "id": 25,
        "question": "Which MRI sequence provides the best differentiation between normal and abnormal tissues by using water content to highlight pathologies?",
        "options": [
          "T1-weighted",
          "T2-weighted",
          "Proton density-weighted",
          "Gradient echo"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "T2-weighted images provide excellent differentiation between normal and abnormal tissues due to their sensitivity to water content, which is often increased in pathological tissues."
    },
    {
        "id": 26,
        "question": "Which parameter primarily determines the contrast between different tissues in T1-weighted images?",
        "options": [
          "T1 relaxation time",
          "T2 relaxation time",
          "Proton density",
          "Slice thickness"
        ],
        "correctAnswer": 0, // was 1
        "rationale": "The contrast in T1-weighted images is primarily influenced by T1 relaxation time, which measures how quickly tissues recover longitudinal magnetization."
    },
    {
        "id": 27,
        "question": "Which process describes the loss of coherence of proton spins, leading to signal decay in MRI?",
        "options": [
          "Precession",
          "Dephasing",
          "Rephasing",
          "Inversion"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Dephasing refers to the process in which proton spins lose coherence, leading to signal decay and reduced signal-to-noise ratio (SNR) in MRI."
    },
    {
        "id": 28,
        "question": "Which of the following factors increases contrast-to-noise ratio (CNR) in MRI?",
        "options": [
          "Using a short echo time (TE)",
          "Using a long repetition time (TR)",
          "Administering gadolinium contrast",
          "Decreasing slice thickness"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Administering gadolinium contrast increases CNR by enhancing the differences between normal and abnormal tissues, making it easier to visualize lesions."
    },
    {
        "id": 29,
        "question": "Which of the following MRI artifacts is caused by the difference in precessional frequencies of fat and water?",
        "options": [
          "Zipper artifact",
          "Aliasing",
          "Chemical shift artifact",
          "Susceptibility artifact"
        ],
        "correctAnswer": 2, // was 3
        "rationale": "Chemical shift artifact is caused by the difference in precessional frequencies between fat and water, which can result in misalignment of tissues in the image."
    },
    {
        "id": 30,
        "question": "In MRI, what effect does increasing the field of view (FOV) have on the image?",
        "options": [
          "Increases spatial resolution",
          "Decreases spatial resolution",
          "Increases noise",
          "Decreases contrast"
        ],
        "correctAnswer": 1, // was 2
        "rationale": "Increasing the field of view (FOV) decreases spatial resolution because it results in larger pixel sizes, which reduces the ability to distinguish small structures in the image."
    }
];
