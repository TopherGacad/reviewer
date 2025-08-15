import { QuestionSet } from "@/types";

import { module_1 } from "./questions/module_1/module_1";

import { cluster_1 } from "./questions/cluster_1/cluster_1";
import { cluster_2 } from "./questions/cluster_2/cluster_2";
import { cluster_3 } from "./questions/cluster_3/cluster_3";
import { cluster_3_upper_ext } from "./questions/cluster_3/cluster_3_upper_ext";
import { cluster_3_lower_ext } from "./questions/cluster_3/cluster_3_lower_ext";
import { cluster_4_rad_phato } from "./questions/cluster_4/cluster_4_rad_phato";
import { cluster_4 } from "./questions/cluster_4/cluster_4";
import { cluster_5 } from "./questions/cluster_5/cluster_5";

import { mock_exam_moderate } from "./questions/mock_exam/mock_exam_moderate";
import { mock_exam_hard } from "./questions/mock_exam/mock_exam_hard";
import { mock_exam_difficult } from "./questions/mock_exam/mock_exam_difficult";

import { rad_quality } from "./questions/custom/umak/rad_quality";
import { iem } from "./questions/custom/umak/iem";
import { rpc } from "./questions/custom/umak/rpc";
import { ipe_marva } from "./questions/custom/umak/ipe_marva";
import { image_processing } from "./questions/custom/umak/image_processing";

export const questions: Record<string, QuestionSet> = {
  module_1: {
    label: "Module 1",
    questions: module_1,
  },

  cluster_1: {
    label: "Cluster 1",
    questions: cluster_1,
  },

  cluster_2: {
    label: "Cluster 2",
    questions: cluster_2,
  },

  cluster_3_lower_ext: {
    label: "Cluster 3: Lower Extremities",
    questions: cluster_3_lower_ext,
  },
  cluster_3_upper_ext: {
    label: "Cluster 3: Upper Extremities",
    questions: cluster_3_upper_ext,
  },
  cluster_3: {
    label: "Cluster 3",
    questions: cluster_3,
  },

  cluster_4_rad_phato: {
    label: "Cluster 4: Radiologic Pathology",
    questions: cluster_4_rad_phato,
  },
  cluster_4: {
    label: "Cluster 4",
    questions: cluster_4,
  },
  cluster_5: {
    label: "Cluster 5",
    questions: cluster_5,
  },
  mock_exam_difficult: {
    label: "Mock Exam: Difficult ",
    questions: mock_exam_difficult,
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
  ipe_marva: {
    label: "UMAK-IPE-MARVA",
    questions: ipe_marva,
  },

  rad_quality: {
    label: "Custom: Radiographic Quality",
    questions: rad_quality,
  },

  // TODO: Add year category
  // TODO: Optimize module and question set. Read filename instead of registering them manually.
  rpc: {
    label: "Custom: RPC A",
    questions: rpc,
  },

  iem: {
    label: "Custom: IEM",
    questions: iem,
  },

  image_processing: {
    label: "Custom: Image Processing",
    questions: image_processing,
  },
};
