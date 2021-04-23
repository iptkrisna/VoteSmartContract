import DappLib from "@decentology/dappstarter-dapplib";
import DOM from "../../lib/components/shared/dom";
import "../../lib/components/shared/action-card.js";
import "../../lib/components/shared/action-button.js";
import "../../lib/components/widgets/text-widget.js";
import "../../lib/components/widgets/number-widget.js";
import "../../lib/components/widgets/account-widget.js";
import "../../lib/components/widgets/upload-widget.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { LitElement, html, customElement, property } from "lit-element";
import kitty from "../assets/img/kitty.jpg";
import doggo from "../assets/img/doggo.jpg";

@customElement("dapp-page")
export default class DappPage extends LitElement {
  @property()
  get;
  @property()
  post;
  @property()
  title;
  @property()
  category;
  @property()
  description;

  createRenderRoot() {
    return this;
  }
  constructor(args) {
    super(args);
    console.log(DappLib.getCandidates())
  }

  getCandidates = async e => {
    let result = await DappLib.getCandidates();
    let resultHtml = "";
    result.forEach((item, index) => {
      resultHtml += `
        <tr>
          <td class="border px-4 py-2">${index}</td>
          <td class="border px-4 py-2">${item.name}</td>
          <td class="border px-4 py-2">${item.voteCount}</td>
        </tr>
      `;
    });
    DOM.elid("candidate-lookup").innerHTML = resultHtml;
  };

  showResults = async e => {
    // DOM.elid("get-candidates").click();
    DOM.elid("tally").classList.remove("hidden");
    let result = DappLib.getCandidates();
    this.getCandidates()
    console.table(result);
  }

  render() {
    let content = html`
      <div class="flex flex-wrap mb-4">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
            <img class="w-full" src="${kitty}" alt="Miss Kitty"> // Use Kitty icon here
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Miss Kitty </div>
              <p class="text-gray-700 text-base h-20">
                Choose me as your next board member. Purr.
              </p>
            </div>
            <div class="px-6 py-4"> 
              <div id="kitty-form" class="text-center">
                <input 
                  type="hidden"
                  data-field="candidateId"
                  value="0"
                >
                <action-button
                  source="#kitty-form"
                  action="vote"
                  method="post"
                  fields="candidateId"
                  text="Vote for Kitty"
                  class="mt-4"
                  .click=${this.showResults}
                >
                </action-button>
              </div>
            </div>
          </div>
        </div>
      
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
          <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
            <img class="w-full" src="${doggo}" alt="Mr Doggo"> // Use Doggo icon here
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Mr Doggo </div>
              <p class="text-gray-700 text-base h-20">
                If you choose me, we'll be ruff!
              </p>
            </div>
            <div class="px-6 py-4"> 
              <div id="doggo-form" class="text-center">
                <input 
                  type="hidden"
                  data-field="candidateId"
                  value="1"
                >
                <action-button
                  source="#doggo-form"
                  action="vote"
                  method="post"
                  fields="candidateId"
                  text="Vote for Doggo"
                  class="mt-4"
                  .click=${this.showResults}
                >
                </action-button>
              </div>
            </div>
          </div>
        </div>
        <div id="tally" class="hidden">
        <div class="mt-4 rounded p-3">
        <table class="table-auto">
          <thead>
            <th class="px-4 py-2">Candidate ID</th>
            <th class="px-4 py-2">Candidate</th>
            <th class="px-4 py-2">Vote Count</th>
          </thead>
          <tbody id="candidate-lookup">
          </tbody>
        </table>
        </div>
        </div>
      </div>
    `;
    return content;

  }
}
