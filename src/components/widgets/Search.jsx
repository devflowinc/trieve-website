import { initTrieveModalSearch, TrieveSDK } from 'trieve-search-component';
import 'trieve-search-component/dist/index.css';

const trieve = new TrieveSDK({
  apiKey: 'tr-l1IRx4Jw0iVICiFdf9NroFwmDWQ4CnEd',
  datasetId: '85bdeb65-44ec-4c9c-9d64-725601ad672a',
});

initTrieveModalSearch({
  trieve,
  theme: 'dark',
});

const SearchComponent = () => {
  return (
    <div class="flex justify-center">
      <div class="min-w-[300px]">
        <trieve-modal-search />
      </div>
    </div>
  );
};

export default SearchComponent;
