export type StudentType = {
  avatar: string;
  email: string;
  gender: "male" | "female";
  grade: Grade;
  id: string;
  name: string;
  phone: string;
};

type Grade = {
  grade: "A" | "B" | "C" | "D";
};

export type StudentListType = {
  fetchData: StudentType[] | undefined;
};
