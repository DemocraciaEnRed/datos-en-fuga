import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

const Eventos = async () => {
    const { data } = await fetchData();
    console.log(data);
    return (
        <div>Eventos</div>
    )
}
export default Eventos

const fetchData = async () => {
    const storyblokApi = getStoryblokApi()

    let sbParams: ISbStoriesParams = {
        version: 'draft',
        starts_with: "news/"
    };
    return await storyblokApi.get(`cdn/stories`, sbParams);
}