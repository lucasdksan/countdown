const validationCollection = (collection: string, collectionsArr: { id: string, name: string, __typename: string }[]) => {
    let collectionExist = false;

    collectionsArr.forEach((e) => {
        if (e.id === collection) collectionExist = true;
    });

    if (!collectionExist) return false;

    return true;
}

export { validationCollection };