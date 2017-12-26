import * as React from "react";

export default class extends React.Component<{}, {}> {

  myPromise = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('some data')
      }, 1000)
    })

  }

  asyncFunc = async () => {

    const data = await this.myPromise()

    console.log(data)

  }

  public render() {

    const data = this.asyncFunc()

    return(
      <div>
        <h1>This page should demonstrate typescript with async/await </h1>
        <p>{data}</p>
      </div>
    );
  }
}