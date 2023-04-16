interface ICourse {
    readonly title: string;
    price: number;
}

const course: ICourse = {
    title: "Typescript",
    price: 9.8
}

// course.title = "Test";