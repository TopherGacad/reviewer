import { cluster_1_set_1 } from "./questions/cluster_1/cluster_1_set_1";
import { cluster_1_set_2 } from "./questions/cluster_1/cluster_1_set_2";
import { cluster_2_set_1 } from "./questions/cluster_2/cluster_2_set_1";
import { cluster_2_set_2 } from "./questions/cluster_2/cluster_2_set_2";
import { cluster_3_set_1 } from "./questions/cluster_3/cluster_3_set_1";
import { cluster_3_set_2 } from "./questions/cluster_3/cluster_3_set_2";
import { cluster_3_upper_ext } from "./questions/cluster_3/cluster_3_upper_ext";
import { cluster_3_lower_ext } from "./questions/cluster_3/cluster_3_lower_ext";
import { cluster_4_rad_phato } from "./questions/cluster_4/cluster_4_rad_phato";
import { cluster_4_set_1 } from "./questions/cluster_4/cluster_4_set_1";
import { cluster_4_set_2 } from "./questions/cluster_4/cluster_4_set_2";
import { cluster_5_set_1 } from "./questions/cluster_5/cluster_5_set_1";
import { cluster_5_set_2 } from "./questions/cluster_5/cluster_5_set_2";
import { mock_exam_hard } from "./questions/mock_exam/mock_exam_hard";
import { mock_exam_moderate } from "./questions/mock_exam/mock_exam_moderate";
import { mock_exam_difficult_1 } from "./questions/mock_exam/mock_exam_difficult_1";
import { mock_exam_difficult_2 } from "./questions/mock_exam/mock_exam_difficult_2";
import { module_1_set_1 } from "./questions/module_1/module_1_set_1";
import { module_1_set_2 } from "./questions/module_1/module_1_set_2";
import { QuestionSet } from "@/types";
import { custom_ipe_marva_a } from "./questions/custom_umak/ipe_marva_a";
import { custom_ipe_marva_b } from "./questions/custom_umak/ipe_marva_b";
import { custom_ipe_marva_c } from "./questions/custom_umak/ipe_marva_c";
import { custom_ipe_marva_d } from "./questions/custom_umak/ipe_marva_d";
import { poi_a } from "./questions/custom_umak/poi_a";
import { poi_b } from "./questions/custom_umak/poi_b";
import { poi_c } from "./questions/custom_umak/poi_c";
import { poi_d } from "./questions/custom_umak/poi_d";
import { rad_quality_a } from "./questions/custom_umak/rad_quality_a";
import { rad_quality_b } from "./questions/custom_umak/rad_quality_b";
import { rad_quality_c } from "./questions/custom_umak/rad_quality_c";
import { rad_quality_d } from "./questions/custom_umak/rad_quality_d";
import { iem } from "./questions/custom_umak/iem";
import { rpc } from "./questions/custom_umak/rpc";

export const questions: Record<string, QuestionSet> = {
  module_1_set_1: {
    label: "Module 1: Set A",
    questions: module_1_set_1,
  },
  module_1_set_2: {
    label: "Module 1: Set B",
    questions: module_1_set_2,
  },

  cluster_1_set_1: {
    label: "Cluster 1: Set A",
    questions: cluster_1_set_1,
  },
  cluster_1_set_2: {
    label: "Cluster 1: Set B",
    questions: cluster_1_set_2,
  },

  cluster_2_set_1: {
    label: "Cluster 2: Set A",
    questions: cluster_2_set_1,
  },
  cluster_2_set_2: {
    label: "Cluster 2: Set B",
    questions: cluster_2_set_2,
  },

  cluster_3_lower_ext: {
    label: "Cluster 3: Lower Extremities",
    questions: cluster_3_lower_ext,
  },
  cluster_3_upper_ext: {
    label: "Cluster 3: Upper Extremities",
    questions: cluster_3_upper_ext,
  },
  cluster_3_set_1: {
    label: "Cluster 3: Set A",
    questions: cluster_3_set_1,
  },
  cluster_3_set_2: {
    label: "Cluster 3: Set B",
    questions: cluster_3_set_2,
  },

  cluster_4_rad_phato: {
    label: "Cluster 4: Radiologic Pathology",
    questions: cluster_4_rad_phato,
  },
  cluster_4_set_1: {
    label: "Cluster 4: Set A",
    questions: cluster_4_set_1,
  },
  cluster_4_set_2: {
    label: "Cluster 4: Set B",
    questions: cluster_4_set_2,
  },

  cluster_5_set_1: {
    label: "Cluster 5: Set A",
    questions: cluster_5_set_1,
  },
  cluster_5_set_2: {
    label: "Cluster 5: Set B",
    questions: cluster_5_set_2,
  },
  mock_exam_difficult_1: {
    label: "Mock Exam: Difficult Set A",
    questions: mock_exam_difficult_1,
    codeRequired: true,
  },
  mock_exam_difficult_2: {
    label: "Mock Exam: Difficult Set B",
    questions: mock_exam_difficult_2,
    codeRequired: true,
  },
  mock_exam_hard: {
    label: "Mock Exam: Hard",
    questions: mock_exam_hard,
    codeRequired: true,
  },
  mock_exam_moderate: {
    label: "Mock Exam: Moderate",
    questions: mock_exam_moderate,
    codeRequired: true,
  },
  custom_ipe_marva_a: {
    label: "Custom: UMAK-IPE-MARVA A",
    questions: custom_ipe_marva_a,
  },
  custom_ipe_marva_b: {
    label: "Custom: UMAK-IPE-MARVA B",
    questions: custom_ipe_marva_b,
  },
  custom_ipe_marva_c: {
    label: "Custom: UMAK-IPE-MARVA C",
    questions: custom_ipe_marva_c,
  },
  custom_ipe_marva_d: {
    label: "Custom: UMAK-IPE-MARVA D",
    questions: custom_ipe_marva_d,
  },

  poi_a: {
    label: "Custom: POI A",
    questions: poi_a,
  },
  poi_b: {
    label: "Custom: POI B",
    questions: poi_b,
  },
  poi_c: {
    label: "Custom: POI C",
    questions: poi_c,
  },
  poi_d: {
    label: "Custom: POI D",
    questions: poi_d,
  },

  rad_quality_a: {
    label: "Custom: Radiographic Quality A",
    questions: rad_quality_a,
  },
  rad_quality_b: {
    label: "Custom: Radiographic Quality B",
    questions: rad_quality_b,
  },
  rad_quality_c: {
    label: "Custom: Radiographic Quality C",
    questions: rad_quality_c,
  },
  rad_quality_d: {
    label: "Custom: Radiographic Quality D",
    questions: rad_quality_d,
  },

  // TODO: Remove sets. Combine all sets to one large array. Just pick 40 random question
  // TODO: Add year category
  // TODO: Save score history using localStorage
  // TODO: Optimize module and question set. Read filename instead of registering them manually.
  rpc: {
    label: "Custom: RPC A",
    questions: rpc,
  },

  iem: {
    label: "Custom: IEM",
    questions: iem,
  },
};
