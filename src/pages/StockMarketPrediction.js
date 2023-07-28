import React from "react";

const StockMarketPrediction = () => {
  return (
    <div
      className="bg-light w-100 container py-4 px-5 my-5"
      style={{
        border: "#1e81b0 5px solid",
        boxShadow: "0px  0px 5px 0px #000",
      }}
    >
      <h1>
        <strong>Stock Market Prediction</strong>
      </h1>
      <h5>Triple Barrier and Meta Labeling Technique</h5>
      <hr />
      <p>
        <strong>SPECIAL GRATITUDE:</strong> This project would have not been
        possible with the continuous collaboration, feedback and support of{" "}
        <strong>Dr. Giri Narasimhan</strong>, the class teacher, Data Science
        Program Coordinator, and Final Evaluation Committee member;{" "}
        <strong>Dr. Viet Cuong Nguyen</strong>, who was my mentor thought the
        duration of the project and member of the Final Evaluation Committee;
        <strong> Dr. Agoritsa Polyzou</strong>, member of the Final Evaluation
        Committee and whose feedback were indispensable; and lastly all the
        classmates for the CAPSTONE 1 & 2 class for the Spring and Summer term
        2023 of FIU, whose feedback also helped on improving what became a
        project today.
      </p>
      <hr />
      <p>
        All the concepts, topics, and strategies discussed in this project are
        not completely of my own. They were taken from the books{" "}
        <strong>Advances in Financial Machine Learning</strong> and{" "}
        <strong>Machine Learning for Assets Managers</strong> by{" "}
        <strong>Marcos Lopez del Prado</strong>. The concepts presented are
        based on my understanding of the concepts exposed in these books and do
        not necessarily have to comply with the author original intentions. All
        the concepts are adapted and modified or are presented as in the book
        itself.
      </p>
      <hr />
      <p>
        <strong>DISCLAIMER: </strong> The method discussed in this article were
        tested under a controlled environment and do not necessarily have to
        reflect the reality. I, by all means do not take any responsibility for
        the misuse of the ideas discussed in this articles. They are only
        exposed to prove a point and should not be replicated in real life
        without taking the necessary precautions first/
      </p>
      <hr />
      <div className="mt-5">
        <h4>
          <strong>Triple Barrier Technique</strong>
        </h4>
        <div className="d-flex flex-row flex-wrap">
          <div className="w-50">
            <p>
              In short, the Triple Barrier Technique consist of labeling
              observations based on the outcome of three possible events. Three
              barriers will be calculated: Upper, Lower, Vertical. It consist of
              observing the behavior of the stock during a defined period of
              time. The beginning of that time interval is <strong>t0</strong>{" "}
              while the end of that time interval is{" "}
              <strong>t1 (which is also the vertical barrier)</strong>. As we
              read our vertical barrier is defined by a fixed amount of time,
              for this project that time will be 2hrs. The Upper and Lower
              barriers are nothing more than th profit we expect to realize
              between <strong>t0</strong> and <strong>t1</strong>. The classify
              out labels based on the following conditions:
              <ul>
                <li>
                  <strong>Upper Barrier Touched First:</strong> Model Predicted
                  Long (1). Use upper barrier to take profit and lower barrier
                  to stop loss.
                </li>
                <li>
                  <strong>Lower Barrier Touched First:</strong> Model Predicted
                  Short (-1). Use lower barrier to take profit and upper barrier
                  to stop loss.
                </li>
                <li>
                  <strong>Vertical Barrier Touched First:</strong> Meaning time
                  expired and none of the LONG or SHORT events happened. Model
                  Predicted Hold (0). Don’t invest, hold for good opportunity.
                </li>
              </ul>
            </p>
          </div>
          <div className="w-50">
            <img
              width={500}
              src="data:image/png;base64,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"
              alt="Triple Barrier Image"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4>
          <strong>Meta Label Technique</strong>
        </h4>
        <div className="d-flex flex-row flex-wrap">
          <p>
            Meta Label Technique is used to filter out the true positive
            predictions of a primary model. In order words, it will serve as an
            extra confirmation before we accept our primary prediction as true.
            The Meta Label model will merely consist of a binary prediction:
            <ul>
              <li>
                <strong>(1):</strong> Means that the prediction of the primary
                model is true, and we can proceed.
              </li>
              <li>
                <strong>(0):</strong> Means that the prediction of the primary
                model is false, we should not invest.
              </li>
            </ul>
            The Meta Model will be trained with the same features of the primary
            model plus the predictions output of the primary model. in order to
            maximize the Meta Model, it is best to achieve first a primary model
            that achieves high recall for the (-1s) and (1s) regardless of the
            accuracy.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h4>
          <strong>Data Specifics and Process </strong>
        </h4>
        <p>
          For this article, it is assumed that the training and testing data is
          correctly created and labeled. The data baing shown in this article is
          data from Microsoft, Tesla, SQQQ and TQQQ stocks. They all had the
          same features (29 for primary and 30 for meta). The features are the
          regular Open, High, Low, Close, Volume prices of the stock, plus other
          most commonly used indicators that were added.
        </p>
        <p>
          For the training/test splits it is recommended that our data is not
          shuffled. The reason why is because if shuffled we will not be
          resembling a real case scenario. Training a model with shuffled data
          will mean that the model will be trained on data from the future that
          it will not be able to access on a real live test case.
        </p>
      </div>
      <hr />
      <div className="mt-5">
        <h4>
          <strong>Prediction Result</strong>
        </h4>
        <div className="d-flex flex-column">
          <div className="w-100">
            <p>
              The confusion matrix below reflex both our primary and Meta label
              models. We can see that by nly using the primary model we
              correctly classify 34.65% of the correct LONG (1) opportunities
              and 65.63% of the correct SHORT (-1) opportunities.
            </p>
            <p>
              However, when looking at the image on the right (META LABELING),
              we can see that our META Model correctly filters 89.81% of the
              true cases. Meaning that we will have less false positives from
              our primary model.
            </p>
          </div>
          <h6 className="mt-4">
            <strong>Confusion Matrix for Microsoft (MSFT)</strong>
          </h6>
          <div className="d-flex flex-row w-100">
            <img
              className="w-50"
              src="/assets/IDN/MSFT CM Primary Extended Percentage.png"
              alt=""
            />

            <img
              className="w-50"
              src="/assets/IDN/MSFT CM META COMBINED Adjusted (Percent).png"
              alt=""
            />
          </div>
          <h6 className="mt-4">
            <strong>Confusion Matrix for Testa (TSLA)</strong>
          </h6>
          <div className="d-flex flex-row w-100">
            <img
              className="w-50"
              src="/assets/IDN/TSLA CM Primary Extended Percentage.png"
              alt=""
            />

            <img
              className="w-50"
              src="/assets/IDN/TSLA CM META COMBINED Adjusted (Percent).png"
              alt=""
            />
          </div>
          <h6 className="mt-4">
            <strong>Confusion Matrix for Inverse Nasdaq (SQQQ)</strong>
          </h6>
          <div className="d-flex flex-row w-100">
            <img
              className="w-50"
              src="/assets/IDN/SQQQ CM Primary Extended Percentage.png"
              alt=""
            />

            <img
              className="w-50"
              src="/assets/IDN/SQQQ CM META COMBINED Adjusted (Percent).png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5">
        <h4>
          <strong>ROI - Return On Investment</strong>
        </h4>
        <div className="d-flex flex-column">
          <div className="w-100">
            <p>
              The pictures below resemble the Return of Investment by comparing
              The Triple Barrier Alone against the Triple Barrier and Meta
              combined for the period of February to July 2023.
            </p>
            <p>
              The Following Are other Strategies Being Compared against Triple
              Barrier Method combined with META Labeling:
              <ul>
                <li>
                  <strong>Native Close:</strong> Consist on buying the stock and
                  hold it for a period of time. The profits and loss will be
                  whatever movement the stock does when it's being held.
                </li>
                <li>
                  <strong>BB Strategy:</strong> Probably the most known
                  Algorithmic trading strategy out there. Consist on setting up
                  the bollinger bands indicators. When the price touches the
                  lower band the investor would go long or take profit. When the
                  stock touches the upper band the investor will do the
                  contrary.
                </li>
                <li>
                  <strong>RSI Strategy:</strong> Consist on going LONG when the
                  stock is oversold (RSI {"<"} 30) and going SHORT when the
                  stock market is overbought (RSI {">"} 70).
                </li>
                <li>
                  <strong>
                    HiLo Strategy: The LONG/SHORT conditions of the RSI strategy
                    but will only liquidate the positions after at east a profit
                    of $1 is earned.
                  </strong>
                </li>
                <li>
                  <strong>Rolling Expected PnL Meta:</strong> Is the strategy
                  that we discussed in this article by using Triple Barrier and
                  Meta Combined.
                </li>
              </ul>
            </p>
          </div>

          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - Primary Vs Meta.png"
              alt=""
            />
          </div>

          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - Bollinger Band Strategy Vs Close Return.png"
              alt=""
            />
          </div>

          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - RSI Strategy Vs Close Return.png"
              alt=""
            />
          </div>
          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - RSI_Lo-Hi Vs Close Return.png"
              alt=""
            />
          </div>
          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - RSI_Lo-Hi Vs Close Return.png"
              alt=""
            />
          </div>
          <h4>
            <strong>META Vs All Other Strategies</strong>
          </h4>
          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/MSFT Return Comparison - All Vs Meta.png"
              alt=""
            />
          </div>
          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/TSLA Return Comparison - All Vs Meta.png"
              alt=""
            />
          </div>
          <div className="d-flex flex-row w-100">
            <img
              width={1000}
              src="/assets/IDN/SQQQ Return Comparison - All Vs Meta.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-4">
        <h4>
          <strong>Conclusion</strong>
        </h4>
        <p>
          As has been shown in the previous analysis Triple Barrier CCombined
          with META Labeling is a powerful tool to have for all investors. It is
          suited for all class of people, including non traders. With this
          strategy, non-traders will be able to know when and where to buy or
          sell regardless of the knowledge they have os the stock market. For
          beginners and intermediate traders, they will be able to limit their
          loses and start earning some profit, they will also learn the whys of
          the opportunities presented by the model. For advances and expert
          traders, this strategy can work as an extra safety check before they
          actually invest, or they can behave as their the primary model and
          feed information to the META Label model only. However, the best of
          using this method is not by real humans, instead by combining it with
          algorithmic trading. This way, the model can be trained in crypto
          currency or Forex, which are markets that are opened 24hrs a day. Bot
          controlling the algorithmic Trading will never sleep, will never be
          tired, will not make decisions based on sentiment. Its only function
          is to generate profit, and this will eventually surpass any
          experienced trader.
        </p>
      </div>
      <i>This Article was written by Richar Marshall on July 27th, 2023.</i>
    </div>
  );
};

export default StockMarketPrediction;
