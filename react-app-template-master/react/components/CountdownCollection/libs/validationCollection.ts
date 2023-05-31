const validationCollection = (collection: string, collectionsArr: { id: string, name: string, __typename: string }[]) => {
    let collectionExist = false;

    collectionsArr.forEach((e) => {
        if (e.id === collection) collectionExist = true;
    });

    if (!collectionExist) return { isValidCollection: false };

    return { isValidCollection: true };
}

export { validationCollection };