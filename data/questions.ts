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
};
