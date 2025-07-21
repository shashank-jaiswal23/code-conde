export function jsonModifier(passedData) {
    let modifiedJSONDta = [];
    if (!Array.isArray(passedData['data'])) {
        let ele = passedData['data']
        // console.log(ele)
        if (ele !== null) {
            let id = ele['id']
            modifiedJSONDta = {id, ...ele.attributes}
            modifiedJSONDta['id'] = data['data']['id']
        }

    } else {
        passedData['data'].forEach(element => {
            let id = element['id']

            modifiedJSONDta.push({id, ...element.attributes})
        });
    }
    return modifiedJSONDta
}

export function ImageModifier (image) {
    if (!image['data']['attributes']) {
        return {}
    }

    return {
        id: image['data']['id'],
        ...image['data']['attributes']
    }
}

export function crousal ({data}) {
    let formattedCrousal = []
    formattedCrousal = data.map(item => ({
      id: item.id,
      ...item.attributes
  }));
    return formattedCrousal
}